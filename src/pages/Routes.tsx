import { Navigate, Route, Routes } from "react-router-dom"
import Validation from "./formDemo/validation"
import Okta from "./okta"
import ReduxDemo from "./reduxDemo"
import RequestDemo from "./requestDemo"
import Table from "./table"

export default () => {
  return <Routes>
    <Route path="/" element={<Navigate to="requestDemo" />} />
    <Route path="requestDemo" element={<RequestDemo />} />
    <Route path="formDemo/validation" element={<Validation />} />
    <Route path="table" element={<Table />} />
    <Route path="reduxDemo" element={<ReduxDemo />} />
    <Route path="okta" element={<Okta />} />
  </Routes>
}