// import React, { useState } from "react";
// import loginSignupImage from "../assest/login-animation.gif";
// import { BiShow } from "react-icons/bi";
// import { BiHide } from "react-icons/bi";
// import { Link,useNavigate } from "react-router-dom";

// function Signup() {
//     const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   console.log(data)
//   const handleShowPassword = () => {
//     setShowPassword((preve) => !preve);
//   };
//   const handleShowConfirmPassword = () => {
//     setShowConfirmPassword((preve) => !preve);
//   };

//   const handleOnChange = (e)=>{
//     const {name,value} = e.target
//     setData((preve)=>{
//         return{
//             ...preve,[name]: value
//         }
//     })
//   }
// //   const handleSubmit = async(e) => {
// //     e.preventDefault();
// //     const { firstName, email, password, confirmPassword } = data;
// //     if (firstName && email && password && confirmPassword) {
// //       if (password === confirmPassword) {

// //           alert("successful")

// //       }
// //       else {
// //         alert("password and confirm password not equal");
// //       }
// //     } else {
// //       alert("Please Enter required fields");
// //     }
// //   }

// console.log(process.env.REACT_APP_SERVER_DOMIN)
// const handleSubmit = async(e) => {
//     e.preventDefault();
//     const { firstName, email, password, confirmPassword } = data
//     if (firstName && email && password && confirmPassword) {
//       if (password === confirmPassword) {
//         const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN} /Signup`,{
//           method:'POST',
//           headers:{'Content-Type':'application/json'},
//           body : JSON.stringify(data)
//         })

//         const dataRes = await fetchData.json()
//         console.log(dataRes)

//         alert("successful")
//         //navigate("/login")
//         } else {
//         alert("password and confirm password not equal");
//       }
//     } else {
//       alert("Please Enter required fields");
//     }
//   };
//   return (
//     <div className="p-3 md:p-4">
//       <div className="w-full max-w-sm bg-white m-auto flex-col p-4">
//         {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
//         <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
//           <img src={loginSignupImage} className="w-full" />
//         </div>

//         <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type={"text"}
//             id="firstName"
//             name="firstName"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.firstName}
//             onChange={handleOnChange}
//           />
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type={"text"}
//             id="lastName"
//             name="lastName"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.lastName}
//             onChange={handleOnChange}
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type={"email"}
//             id="email"
//             name="email"
//             className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
//             value={data.email}
//             onChange={handleOnChange}
//           />

//           <label htmlFor="password">Password</label>
//           <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               className=" w-full bg-slate-200 border-none outline-none"
//               value={data.password}
//               onChange={handleOnChange}
//           />

//             <span
//               className="flex-text-xl cursor-pointer"
//               onClick={handleShowPassword}
//             >
//               {showPassword ? <BiShow /> : <BiHide />}
//             </span>
//           </div>
//           <label htmlFor="confirmpassword">Confirm password</label>
//           <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id="confirmpassword"
//               name="confirmPassword"
//               className=" w-full bg-slate-200 border-none outline-none"
//               value={data.confirmpassword}
//               onChange={handleOnChange}
//           />

//             <span
//               className="flex-text-xl cursor-pointer"
//               onClick={handleShowConfirmPassword}
//             >
//               {showConfirmPassword ? <BiShow /> : <BiHide />}
//             </span>
//           </div>
//           <button type="submit" className="w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4 ">
//             Sign up
//           </button>
//         </form>
//         <p className="text-left text-sm mt-2">
//           Already have an account ?{" "}
//           <Link to={"/login"} className="text-red-500 underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
//import { BsEmojiSmileUpsideDown } from "react-icons/bs";
//import { ImagetoBase64 } from "../utility/ImagetoBase64";

function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // const handleUploadProfileImage = async(e)=>{
  //     const data = await ImagetoBase64(e.target.files[0])

  //     setData((preve)=>{
  //         return{
  //           ...preve,
  //           image : data
  //         }
  //     })

  // }
  console.log(process.env.REACT_APP_SERVER_DOMIN);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { firstName, email, password, confirmPassword } = data;
  //   if (firstName && email && password && confirmPassword) {
  //     if (password === confirmPassword) {
  //       const fetchData = await fetch(
  //         `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       );

  //       const dataRes = await fetchData.json();
  //     } else {
  //       alert("password and confirm password not equal");
  //     }
  //   } else {
  //     alert("Please Enter required fields");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMIN}/signup`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
  
        if (fetchData.status === 200) {
          const dataRes = await fetchData.json();
          console.log(dataRes);
          alert(dataRes.message);
          // navigate("/login")
        } else {
          const errorText = await fetchData.text();
          alert(`Error: ${errorText}`);
        }
      } else {
        alert("Password and Confirm Password do not match");
      }
    } else {
      alert("Please fill in all required fields");
    }
  };
  
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : loginSignupImage}
            className="w-full h-full"
          />
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
