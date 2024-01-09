import {fireEvent, render, screen} from '@testing-library/react';
import { afterEach, expect, it,  vi } from 'vitest';
import {SelectedHAs} from './SelectedHAs';
import * as router  from 'react-router';
import { MemoryRouter } from 'react-router-dom';



it('renders component correctly', () => {
    const locationState = { left: 'Left HA', right: 'Right HA' };
    render(
        <MemoryRouter initialEntries={[{state : locationState}]}>
            <SelectedHAs />
        </MemoryRouter>
    )
    expect(screen.getByText(/Left HA/i))
});



it('navigates to App when clicking on the Diconnect button', () => {
    const locationState = { left: 'Left HA', right: 'Right HA' };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const temp: any = {pathname: "/", search: "", hash: "", hostname: "", key: "", state: locationState}
    

    const navigate = vi.fn();
    vi.spyOn(router, "useNavigate").mockImplementation(() => navigate);
    vi.spyOn(router, "useLocation").mockImplementation(() => temp);
    render(
        <MemoryRouter initialEntries={[{state : locationState}]}>
            <SelectedHAs />
        </MemoryRouter>
    )
    const disconnectButton = screen.getByText(/Disconnect/i);
    fireEvent.click(disconnectButton);
    expect(navigate).toHaveBeenCalledWith('/')
});

afterEach(() => {
    vi.clearAllMocks()
})







