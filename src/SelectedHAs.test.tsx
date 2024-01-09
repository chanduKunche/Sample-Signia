import {fireEvent, render, screen} from '@testing-library/react';
import { afterEach, expect, it,  vi } from 'vitest';
import {SelectedHAs} from './SelectedHAs';
import * as router  from 'react-router';
import { MemoryRouter } from 'react-router-dom';



it('renders component correctly', () => {
    const locationState = [
        {
          id: 1,
          serialNumber: "Serial No. SF00310",
          brand: "Styletto 7AX S (110/46)",
        },
        {
          id:2,
          serialNumber: "Serial No. SF00311",
          brand: "Styletto pro 7AX S (110/46)",
        },
        {
          id:3,
          serialNumber: "Serial No. SF00312",
          brand: "Styletto pro 7AX S (110/46)",
        },
      ];
    render(
        <MemoryRouter initialEntries={[{state : locationState}]}>
            <SelectedHAs />
        </MemoryRouter>
    )
    expect(screen.getByText(/Serial No. SF00310/i))
});



it('navigates to App when clicking on the Diconnect button', () => {
    const locationState = [
        {
          id: 1,
          serialNumber: "Serial No. SF00310",
          brand: "Styletto 7AX S (110/46)",
        },
        {
          id:2,
          serialNumber: "Serial No. SF00311",
          brand: "Styletto pro 7AX S (110/46)",
        },
        {
          id:3,
          serialNumber: "Serial No. SF00312",
          brand: "Styletto pro 7AX S (110/46)",
        },
      ];
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







