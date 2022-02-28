// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';


function Landing({ loggedIn, setLoggedIn }) {
  const jwt = localStorage.getItem('token');
  const salonurl = 'http://localhost:3001/salons';
  const serviceurl = 'http://localhost:3001/services';

  axios.get(salonurl,
    // {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // }
  )
    .then(({ data }) => {
      console.log('salons', data)
    })

  axios.get(serviceurl,
    // {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // }
  )
    .then(({ data }) => {
      console.log('services', data)
    })

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const [openSpLogin, setOpenSpLogin] = useState(false);
  const [openSpSignup, setOpenSpSignup] = useState(false);

  const onOpenSpLoginModal = () => {
    setOpenSpLogin(true);

  }
  const onCloseSpLoginModal = () => setOpenSpLogin(false);
  const onOpenSpSignupModal = () => {
    setOpenSpSignup(true)

  }
  const onCloseSpSignupModal = () => setOpenSpSignup(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [gender, setGender] = useState(0)
  const [mobile, setMobile] = useState('')
  const [dob, setDob] = useState('')

  const loginData = {
    "email": email,
    "password": password,
  }

  const signupData = {
    "email": email,
    "password": password,
    "first_name": firstname,
    "last_name": lastname,
    "gender": gender,
    "mobile": mobile,
    "date_of_birth": dob,
    "usertype": 1
  }

  // const genderSelectItems = [
  //   { label: 'Female', value: 0 },
  //   { label: 'Male', value: 1 },
  //   { label: 'Other', value: 2 }
  // ];
  // const handleSubmitSignup = async (event) => {
  //   event.preventDefault();
  //   if (password === passwordConfirmation) {
  //     console.log('signing up')
  //     try {
  //       const res = await axios.post('http://localhost:3001/users ', signupData);
  //       const { token } = res.data;
  //       console.log('res', res.data);
  //       if (token) {
  //         setLoggedIn(true);
  //         onCloseSpSignupModal()
  //         localStorage.setItem('token', token);
  //         console.log('jwt: ', token)
  //       }
  //     }
  //     catch (error) {
  //       console.log('oh, no', error);
  //     }
  //   }
  //   else {
  //     console.log('Passwords should match')
  //   }
  // }

  const handleSubmitSpSignup = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      console.log('signing up', signupData)
      fetch("http://localhost:3001/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
            first_name: firstname,
            last_name: lastname,
            gender: gender,
            mobile: mobile,
            date_of_birth: dob,
            usertype: 0
          },
        }),
      })
        .then((res) => {
          if (res.ok) {
            console.log(res.headers.get("Authorization"));
            localStorage.setItem("token", res.headers.get("Authorization"));
            setLoggedIn(true);
            onCloseSpSignupModal()
            return res.json();
          } else {
            throw new Error(res);
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err));

    }
    else {
      console.log('Passwords should match')
    }
  }


  // const handleSubmitLogin = async (event) => {
  //   event.preventDefault();
  //   console.log('logging', loginData)
  //   const res = await axios.post('http://localhost:3001/login ', {
  //     withCredentials: true,
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   }, {
  //     auth: {
  //       email: email,
  //       password: password
  //     }
  //   }).then(function (response) {
  //     console.log('Authenticated');
  //   }).catch(function (error) {
  //     console.log('Error on Authentication');
  //   });
  //   // try {
  //   //   const res = await axios.post('http://localhost:3001/login ', loginData);
  //   //   const { token } = res.data;
  //   //   console.log('res', res.data);
  //   //   if (token) {
  //   //     setLoggedIn(true);
  //   //     onCloseSpLoginModal()
  //   //     localStorage.setItem('token', token);
  //   //     console.log('jwt: ', token)
  //   //   }
  //   // }
  //   // catch (error) {
  //   //   console.log('Err: ', error);
  //   // }
  // }

  const handleSubmitSpLogin = async (event) => {
    event.preventDefault();
    console.log('logging')

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get("Authorization"));
          localStorage.setItem("token", res.headers.get("Authorization"));
          setLoggedIn(true);
          onCloseSpLoginModal()
          return res.json();
        } else {
          return res.text().then((text) => Promise.reject(text));
        }
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  }


  // const handleLogout = () => {
  //   delete axios.defaults.headers.common.Authorization;
  //   setLoggedIn(false)
  //   localStorage.removeItem('token');
  // }

  const handleSpLogout = () => {
    fetch("http://localhost:3001/logout", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        if (res.ok) {
          setLoggedIn(false)
          return res.json();
        } else {
          return res.json().then((json) => Promise.reject(json));
        }
      })
      .then((json) => {
        console.dir(json);
      })
      .catch((err) => console.error(err));
  }


  return (
    <>
      <Modal open={openSpLogin} onClose={onCloseSpLoginModal} centre>
        <h2>Salon Owner Login</h2>
        <form onSubmit={handleSubmitSpLogin}>
          <label className="justify-left w-100 px-5">
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
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}
            />
          </label>
          <br /><br />
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>

          {/* <div>
            or <Link to="/signup">Sign up</Link>
          </div> */}
        </form>
      </Modal>
      <Modal open={openSpSignup} onClose={onCloseSpSignupModal} centre>
        <h2> Salon Owner Signup</h2>
        <form onSubmit={handleSubmitSpSignup}>
          <label className="justify-left w-100 px-5">
            {/* User Name
            <input
              className="form-control"
              placeholder="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            /> */}
            Email
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
            Password
            <input
              className="form-control"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={event => {
                setPassword(event.target.value)
              }}
            />
            Confirm Password
            <input
              className="form-control"
              placeholder="password confirmation"
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={event => {
                setPasswordConfirmation(event.target.value)
              }}
            />
            First Name
            <input
              className="form-control"
              placeholder="First Name"
              type="string"
              name="firstname"
              value={firstname}
              onChange={event => {
                setFirstname(event.target.value)
              }}
            />
            Last Name
            <input
              className="form-control"
              placeholder="Last Name"
              type="string"
              name="lastName"
              value={lastname}
              onChange={event => {
                setLastname(event.target.value)
              }}
            />
            Gender
            <label>
              Your Gender:
              <select value={gender} onChange={event => {
                setGender(parseInt(event.target.value))
              }}
              >
                <option value="0" >She</option>
                <option value="1" >He</option>
                <option value="2" >Others</option>
              </select>
            </label>
            {/* <input
              className="form-control"
              placeholder="Gender"
              type="integer"
              name="gender"
              value={gender}
              onChange={event => {
                setGender(event.target.value)
              }}
            /> */}
            Date of Birth
            <input
              className="form-control"
              placeholder="Date of Birth"
              type="date"
              name="dob"
              value={dob}
              onChange={event => {
                setDob(event.target.value)
              }}
            />
            Mobile
            <input
              className="form-control"
              placeholder="Mobile"
              type="string"
              name="mopbile"
              value={mobile}
              onChange={event => {
                setMobile(event.target.value)
              }}
            />
          </label>

          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>
        </form >
      </Modal >

      <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Pick your Salon or Service</h2>
              <p className="text-center wow fadeInDown">
                If you are Salon Owner, signup or signin here <br />

              </p>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {(loggedIn) ? (
                  <li>
                    <button className='nav-links' style={{ color: 'red', border: 'none' }} onClick={handleSpLogout}>Logout</button>
                  </li>
                )
                  : (
                    <li>
                      <button className='nav-links' style={{ color: 'red', border: 'none' }} onClick={onOpenSpLoginModal}>Login</button>
                    </li>
                  )
                }
                <li>
                  <button className='nav-links' style={{ color: 'red', border: 'none' }} onClick={onOpenSpSignupModal}>Signup</button>
                </li>
              </ul>
            </div>
            {/* <nav className='navbar'> */}
            {/* <div className='navbar-container container'> */}


            {/* </div > */}
            {/* </nav > */}

          </Row>
          <Row >

            <Col xs={6} >
              <Image src="images/about.png" fluid />
            </Col>
            <Col xs={6} >
              <p>
                It all started when our first car broke down and we had to run from pillar to post
              </p>
              <p>
                That was just the beginning.  As we experienced a series of hassles
                like periodical servicing, fixing minor repairs, more frequent washing
                we understood that it not only involves frequent visits to service centres
                or water service garages, but it also upsets one's work schedule and the
                resultant troubles.
              </p>
              <p>
                It is then we thought of a service which could help the vehicle owners
                get most of the vehicle maintenance things done at home.  This would make
                the life a vehicle owner comfortable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )

}
// });

export default Landing