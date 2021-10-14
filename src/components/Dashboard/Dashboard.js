import AuthContext from '../../context/auth-context'
import { Container, Row, Col, Card, Form, Button, Spinner, ListGroup } from 'react-bootstrap';
import { useContext, useState, useEffect, useRef } from 'react';

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const [userAccounts, setUserAccounts] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [accountTypes, setAccountTypes] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const nombreCuentaRef = useRef();
  const tipoDeCuentaRef = useRef();
  const monedaRef = useRef();

  console.log(authCtx.currentUser);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if(nombreCuentaRef.current.value === '') return;
    if(tipoDeCuentaRef.current.value === '') return;
    if(monedaRef.current.value === '') return;
    setDisableSubmit(true)
    // ...
    //const idToken = await authCtx.currentUser.getIdToken();
    setDisableSubmit(false)
    nombreCuentaRef.current.value = '';
    tipoDeCuentaRef.current.value = '';
    monedaRef.current.value = '';
  }

  const accountTypesOptions = null;
  const currenciesOptions = null;
  const userAccountsList = null;

  return (
    <Container fluid className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col md={5} className="d-flex align-items-center justify-content-center">
            <Card style={{maxWidth: "80%"}}>
              <Card.Body>
                <Form onSubmit={onSubmitHandler}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Nombre de cuenta</Form.Label>
                      <Form.Control placeholder="Ingrese nombre de cuenta" ref={nombreCuentaRef} />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Tipo de cuenta</Form.Label>
                      <Form.Select ref={tipoDeCuentaRef} >
                        <option value=''>Seleccione una opción</option>
                        {accountTypesOptions}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Moneda de cuenta</Form.Label>
                      <Form.Select ref={monedaRef}>
                        <option value=''>Seleccione una opción</option>
                        {currenciesOptions}
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 justify-content-end">
                    <Col md={3} className="d-flex justify-content-end">
                      <Button
                        disabled={disableSubmit}
                        variant="outline-success" 
                        type="submit" 
                        style={{width: '100%'}}>
                          {disableSubmit && <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />}
                        Crear
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
        </Col>
        <Col md={3} className="d-flex align-items-start justify-content-center">
          <ListGroup>
            { userAccountsList }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
export default Dashboard;
