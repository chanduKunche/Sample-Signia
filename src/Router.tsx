
import { Route, Routes } from "react-router-dom";
import { SelectedHAs } from './SelectedHAs';
import App from './App';
export default function RouterPage() {
  return (
    <Routes>
        <Route path="/selectedHAs" element={<SelectedHAs />} />
        <Route path="/" element = {<App/>}/>
  </Routes>
  )
}
