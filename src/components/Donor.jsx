import { Box1, Box2,Box3, Input1, Input3, Input4, Input5, Input6, RedButton, RedButtondiv, Select1, Select2 , DonorImage} from "../Styles/DonorStyles";
import { useState } from "react";
import image1 from "../assets/Donor.png"

function Donor() {
  const [bgroup, setBgroup] = useState("");
  return (
    <>
      <Box1>
        <h4 style={{margin:'1.5rem 0',fontSize:'1.2rem'}}>Update Requirements</h4>
        <Box2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="name">Patient Name *</label>
                <br />
                <Input1
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Blood group *</label>
                <br />
                <Select1
                  name="bgroup"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>A +ve</option>
                  <option>B +ve</option>
                  <option>O +ve</option>
                  <option>AB +ve</option>
                  <option>A -ve</option>
                  <option>B -ve</option>
                  <option>O -ve</option>
                  <option>AB -ve</option>
                </Select1>
              </div>
              <div>
                <label htmlFor="name">Date of birth *</label>
                <br />
                <Input3
                  type="date"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </Box3>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="name">Mobile number *</label>
                <br />
                <Input4 placeholder="+91"/>
                <Input5
                  type="number"
                  id="number"
                  name="number"
                  placeholder="xx xxxx xxxx"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">District *</label>
                <br />
                <Select2
                  name="bgroup"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>Alappuzha</option><option>Ernakulam</option><option>Idukki</option> <option>Kannur</option><option>Kasaragod</option><option>Kollam</option><option>Kottayam</option><option>Kozhikode</option><option>Malappuram</option><option>Palakkad</option><option>Pathanamthitta</option><option>Thiruvananthapuram</option><option>Thrissur</option><option>Wayanad</option>
                </Select2>
              </div>
              <div>
              <label htmlFor="city">City *</label>
                <br />
                <Input6
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  required
                />
              </div>
            </Box3>
            <Box3 style={{ display: "flex" }}>
              <div>
                <label htmlFor="email">Email id</label>
                <br />
                <Input1
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Are you available from now on *</label>
                <br />
                <Select1
                style={{hover:{cursor:'pointer'}}}
                  name="yesorno"
                  onChange={(e) => setBgroup(e.target.value)}
                  value={bgroup}
                >
                  <option>Yes</option>
                  <option>No</option>
                </Select1><br/>
                <div style={{display:"flex",marginTop:"3rem"}}><input type="checkbox" id="T&C" name="T&C"/><p>I Accept the Terms and Conditions</p></div>
                <RedButtondiv><RedButton type="submit"value="Register"/></RedButtondiv> 
              </div>
            </Box3>
          </div>
          <DonorImage>
            <img
              src={image1}
              alt="donorimage"
              style={{ width: "17rem"}}
            />
          </DonorImage>
        </Box2>
        
      </Box1>
    </>
  );
}

export default Donor;
