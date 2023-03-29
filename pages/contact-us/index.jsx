import Head from 'next/head';
import {createRef, useState} from 'react';
import MainMenu from '../../page-components/navbar.module';
import Footer from '../../page-components/footer.module';
import {Row, Col, Form, Button} from 'react-bootstrap';
import styles from '../../styles/extra.module.scss';
import {countryList} from '../../page-components/data/countryCodeList';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {

    const recaptchaRef = createRef();
    const [validForm, setFormValidity] = useState(false);

    const onChange = (token) => {
        if (token) {
            setFormValidity(true);
        }
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        console.log('event', event.target);
    }

    /**
     * Enterprise Support --> enable company, company size
     *                      --> enable main reason
     *                          Reasons:
     *                                  Cloud Cost Optimisation
     *                                  Faster Kubernetes Adoption
     *                                  Cloud Migrations
     *                                  Legacy/Monolith Scaling
     *                                  End-to-End Cloud Architecture
     *                                  Others
     * Partnership --> enable company, company size
     *             --> Partnership agreements:
     *                  Integration on Data Center / Cloud Platform
     *                  UI Integration with Existing SaaS
     *                  Buy Bulk License for Support
     *                  Others
     * 
     * Community -->  sub-reasons:
     *                  Invite for a community
     *                  Start a community on hydraenium
     *                  Join Hydraenium Community
     *                  Others
     */

  	return (
		<>
			<Head>
				<title>Contact Us | Hydraenium</title>
				<meta name="description" content="The core team of Hydraenium can help you scale your deployment from 0 to 100. 
                We take end-to-end responsibility of your cloud deployment and infrastructure. We are also open for partnership 
                for long-term business goals." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainMenu toggle={false} />
			<main id={styles.contact}>
				<div className='container'>
                    <div className={`row ${styles.centerRow}`}>
                        <div className='col-12'>
                            <h1 className='text-center'>Connect with Hydraenium</h1>
                            <h3 className='text-center'>
                                We help companies adopt the best cloud infra standards and optimize your cloud infra for Scale, Cost, Convenience, and Reliability.
                            </h3>
                            <h5 className='text-center'>
                                Post a question on our <a href='https://forum.hydraenium.org' target="_blank">forum</a> in case of queries and doubts.
                            </h5>
                        </div>
                        <div className='col-xl-8 col-lg-9 col-md-10 col-sm-12'>
                            <Form onSubmit={formSubmit}>
                                <Row className="mb-3" >
                                    <Form.Group as={Col} controlId="inquiryReason">
                                        <Form.Label>Inquiry Reason</Form.Label>
                                        <Form.Select aria-label="Inquiry Purpose">
                                            <option>Select...</option>
                                            <option value="1">Enterprise Support</option>
                                            <option value="2">Partnership</option>
                                            <option value="3">Integrations</option>
                                            <option value="3">Community</option>
                                            <option value="3">Other Questions</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6} sm={12}>
                                        <Form.Group controlId="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <Form.Group controlId="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={12} sm={12}>
                                        <Form.Group controlId="emailId">
                                            <Form.Label>Official Email Id</Form.Label>
                                            <Form.Control type="email" placeholder="Official Email Id" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6} sm={12}>
                                        <Form.Group controlId="countryCode">
                                            <Form.Label>Country Code</Form.Label>
                                            <Form.Select aria-label="Country Code">
                                                <option>Select...</option>
                                                {countryList.map((val) => {
                                                    return (
                                                        <option key={`${val.countryCode}_${val.code}`} value={val.code} data-countrycode={val.countryCode}>{val.countryName}</option>
                                                    );
                                                })}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} sm={12}>
                                        <Form.Group controlId="phoneNumber">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className="pb-3 pt-3">
                                    <Col>
                                        <Form.Group controlId="whatsappCheck">
                                            <Form.Check type="checkbox" label="I acknowledge that I allow to send me WhatsApp messages regarding this inquiry" />
                                        </Form.Group>
                                        <Form.Group controlId="callCheck" className='mt-3'>
                                            <Form.Check type="checkbox" label="I acknowledge that I allow to call me on mentioned phone number regarding this inquiry" />
                                        </Form.Group>
                                        <Form.Group controlId="emailCheck" className='mt-3'>
                                            <Form.Check type="checkbox" label="I acknowledge that I allow to send me emails regarding this inquiry" />
                                        </Form.Group>      
                                    </Col>
                                </Row>
                                <Row className="pb-3 pt-3">
                                    <Col className='text-center'>
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                            // sitekey="6LdRvBslAAAAALAUF6KJmhw8BhhT0m6-0RxBqm2C"
                                            onChange={onChange}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='text-center'>
                                        <Button variant="primary" type="submit" disabled={!validForm}>
                                            Get In Touch
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
			</main>
			<Footer></Footer>
		</>
  	)
}
