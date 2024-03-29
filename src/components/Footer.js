import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import "./Footer.css";

export default function App() {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="dark"
        className="text-center text-lg-start text-muted sticky-bottom"
      >
        <MDBContainer className="text-center text-md-start mt-5">
          <br />
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p>Uniq Labs</p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>sabharwal.d@northeastern.edu</p>
              <p>rosasruiz.j@northeastern.edu</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright: Uniq Labs
        </div>
      </MDBFooter>
    </div>
  );
}
