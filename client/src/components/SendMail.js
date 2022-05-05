import React from 'react';
import axios from 'axios';
// import 'react-responsive-modal/styles.css';

const SendMail = (props) => {
  console.log('props', props)
//   const { mail_email,mail_message, mail_name, mail_subject } = props.email_data
// console.log('details', mail_subject , mail_name, mail_email, mail_message)
  // const { subject, name, email, message}=emailParams

  // const [subject, setSubject] = useState('')
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')



  // const handleSubmit = async (event) => {
  //   event.preventDefault();

    if (props.email_subject && props.email_name && props.email_mail && props.email_message) {

      const emailData = {
        "subject": props.emailData.subject,
        "name": props.email_data.name,
        "email": props.email_data.email,
        "message": props.emailData.message
      }
      // console.log('sending email', emailData)
      // console.log('email:', emailData)
      const jwt = localStorage.getItem('token')
      const url = 'http://localhost:3001/contacts'

      try {
        const res =  axios.post(url, emailData, { headers: { Authorization: `Bearer ${jwt}` } });
        console.log('res', res);
          }
      catch (error) {
        console.log('oh, no', error);
      }
    }
    else {
      console.log('blank fields not permitted')
    }
  

  return (
    <div >
      {/* <h4 align='center' > You can refer your friends by sending an email from here </h4>
      <h2 align='center' >Email Details</h2> */}
      {/* <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Subject"
          variant="outlined"
          type="text"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          type="text"
          required
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Send Mail
          </Button>
        </div>
      </form> */}
      {/* <form onSubmit={handleSubmit}>
          <label className="justify-left w-100 px-5">
            
            <input
              className="form-control"
              placeholder="Subject"
              type="text"
              name="subject"
              value={subject}
              onChange={event => {
                setSubject(event.target.value)
              }}
            />
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
            />
            <br />
            <input
              className="form-control"
              placeholder="email"
              type="text"
              name="email"
              value={email}
              onChange={event => {
                setEmail(event.target.value)
              }}
            />
            <br />
            <input
              className="form-control"
              placeholder="message"
              type="text"
              name="message"
              value={message}
              onChange={event => {
                setMessage(event.target.value)
              }}
            />
            <br />
          </label>
          <br /><br />
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>

          {/* <div>
            or <Link to="/signup">Sign up</Link>
          </div> 
        </form> */}
    </div>
  )

}

export default SendMail
