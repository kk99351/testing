import React, { useMemo } from "react";
import { Row, Col, Card, CardBody, CardHeader, Table } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./datatables.scss";
import TableContainer from "src/components/Common/TableContainer";

interface DatatableTablesProps {
  headers: { [key: string]: string }[];
  data: { [key: string]: string }[];
  displayDiv : string;
  hideDiv : string;
  button : string;
}


const DatatableTables: React.FC<DatatableTablesProps> = ({ headers, data, displayDiv, hideDiv, button }) => {
  const handleRowClick = (rowData: any) => {
    const displayElement = document.getElementById(displayDiv);
    const hideElement = document.getElementById(hideDiv);
  
    if (displayElement) {
      displayElement.style.display = "none";
    }
  
    if (hideElement) {
      hideElement.style.display = "block";
    }
  
    // Access the ID from the rowData object
    const rowId = rowData.id;
  
    // Display the ID in the alert message
    alert(`Clicked row ID: ${rowId}`);
  };
  
  const columns = useMemo(() => {
    return headers.map(header => ({
      Header: header.Header,
      accessor: header.accessor,
      disableFilters: true,
      filterable: true,
    }));
  }, [headers]);

  // Set document title
  document.title = "Advance Tables | Dashonic - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Advance Tables" />
          <Row>
            <Col className="col-12">
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">GridJs Table</h4>
                  <Link
                    to="//www.npmjs.com/package/react-super-responsive-table"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary-subtle"
                  >
                    Docs <i className="mdi mdi-arrow-right align-middle"></i>
                  </Link>
                </CardHeader>
                <CardBody>
                <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddUserList={true}
                    customPageSize={10}
                    className="custom-header-css"
                    displayDiv={displayDiv}
                    hideDiv={hideDiv}
                    button={button}
                    onRowClick={handleRowClick}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};


// Define headers and data
// const headers = [
//   { Header: "Name", accessor: "col_0" },
//   { Header: "Position", accessor: "col_1" },
//   { Header: "Office", accessor: "col_2" },
//   { Header: "Age", accessor: "col_3" },
//   { Header: "Startdate", accessor: "col_4" },
//   { Header: "Salary", accessor: "col_5" }
// ];

// const data = [
//   { col_0: "Airi Satou", col_1: "Accountant", col_2: "Tokyo", col_3: "33", col_4: "2008/11/28", col_5: "$162,700" },
//   { col_0: "Angelica Ramos", col_1: "Chief Executive Officer (CEO)", col_2: "London", col_3: "47", col_4: "2009/10/09", col_5: "$1,200,000" },
//   { col_0: "Ashton Cox", col_1: "Junior Technical Author", col_2: "San Francisco", col_3: "66", col_4: "2009/01/12", col_5: "$86,000" },
//   { col_0: "Bradley Greer", col_1: "Software Engineer", col_2: "London", col_3: "41", col_4: "2012/10/13", col_5: "$132,000" },
//   { col_0: "Brenden Wagner", col_1: "Software Engineer", col_2: "San Francisco", col_3: "28", col_4: "2011/06/07", col_5: "$206,850" },
//   { col_0: "Brielle Williamson", col_1: "Integration Specialist", col_2: "New York", col_3: "61", col_4: "2012/12/02", col_5: "$372,000" },
//   { col_0: "Caesar Vance", col_1: "Pre-Sales Support", col_2: "New York", col_3: "21", col_4: "2011/12/12", col_5: "$106,450" },
//   { col_0: "Cedric Kelly", col_1: "Senior Javascript Developer", col_2: "Edinburgh", col_3: "22", col_4: "2012/03/29", col_5: "$433,060" },
//   { col_0: "Charde Marshall", col_1: "Regional Director", col_2: "San Francisco", col_3: "36", col_4: "2008/10/16", col_5: "$470,600" },
//   { col_0: "Colleen Hurst", col_1: "Javascript Developer", col_2: "San Francisco", col_3: "39", col_4: "2009/09/15", col_5: "$205,500" },
//   { col_0: "Dai Rios", col_1: "Personnel Lead", col_2: "Edinburgh", col_3: "35", col_4: "2012/09/26", col_5: "$217,500" },
//   { col_0: "Donna Snider", col_1: "Customer Support", col_2: "New York", col_3: "27", col_4: "2011/01/25", col_5: "$112,000" },
//   { col_0: "Doris Wilder", col_1: "Sales Assistant", col_2: "Sidney", col_3: "23", col_4: "2010/09/20", col_5: "$85,600" },
//   { col_0: "Fiona Green", col_1: "Chief Operating Officer (COO)", col_2: "San Francisco", col_3: "48", col_4: "2010/03/11", col_5: "$850,000" },
//   { col_0: "Garrett Winters", col_1: "Accountant", col_2: "Tokyo", col_3: "63", col_4: "2011/07/25", col_5: "$170,750" },
//   { col_0: "Gavin Cortez", col_1: "Team Leader", col_2: "San Francisco", col_3: "22", col_4: "2008/10/26", col_5: "$235,500" },
//   { col_0: "Gavin Joyce", col_1: "Developer", col_2: "Edinburgh", col_3: "42", col_4: "2010/12/22", col_5: "$92,575" },
//   { col_0: "Gloria Little", col_1: "Systems Administrator", col_2: "New York", col_3: "59", col_4: "2009/04/10", col_5: "$237,500" },
//   { col_0: "Haley Kennedy", col_1: "Senior Marketing Designer", col_2: "London", col_3: "43", col_4: "2012/12/18", col_5: "$313,500" },
//   { col_0: "Herrod Chandler", col_1: "Sales Assistant", col_2: "San Francisco", col_3: "59", col_4: "2012/08/06", col_5: "$137,500" },
// ];


// // Render the DatatableTables component with headers and data props
// const YourComponent = () => {
//   return <DatatableTables headers={headers} data={data} />;
// };

export default DatatableTables;
// export {YourComponent,DatatableTables};