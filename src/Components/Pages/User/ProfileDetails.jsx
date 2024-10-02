// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import TextInput from "../../SharedComponent/InputField/TextInput";
// import SelectInput from "../../SharedComponent/InputField/SelectInput";
// import Button from "../../SharedComponent/Button/Button";

// // eslint-disable-next-line react/prop-types
// const ProfileDetails = ({data}) => {
//   const { firstName, lastName, email, class: studentClass, group,dateOfBirth, countryCode, phoneNumber, country : userCountry, gender: studentGender } = data
//   const [genderType, setGenderType] = useState(studentGender || "Select gender");
//   const gender = ["Male", "Female"];
//   const [mobileCode, setMobileCode] = useState(countryCode || "Select Country Code");
//   const mobileCodes = ["+880", "+91"];
//   const [country, setCountry] = useState(userCountry || "Select Country");
//   const countries = ["Bangladesh", "India", "USA"];

//   // react hook form
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => {
//     const value = {
//       ...data,
//       genderType,
//       mobileCode,
//       country,
//     };
//     console.log("value", value);
//     reset();
//   };
//   return (
//     <div>
//       <div className="mt-10">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
//             <div>
//               <TextInput
//                 register={register}
//                 type="text"
//                 name="firstName"
//                 label="Enter First Name"
//                 placeholder="First Name"
//               />
//               {errors.firstName && (
//                 <p className="text-xs text-red-600">
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <TextInput
//                 register={register}
//                 type="text"
//                 name="lastName"
//                 label="Enter Last Name"
//                 placeholder="Last Name"
//               />
//               {errors.lastName && (
//                 <p className="text-xs text-red-600">
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col justify-start gap-5 md:flex-row">
//             {/* input email ------- */}
//             <div className="flex-1">
//               <TextInput
//                 register={register}
//                 name="email"
//                 type="email"
//                 label="Enter your email"
//                 placeholder="abc@gamil.com"
//               />
//               {errors.email && (
//                 <p className="text-xs text-red-600">{errors.email.message}</p>
//               )}
//             </div>
//             {/* input role ------- */}
//             <div className="flex-1">
//               <TextInput
//                 register={register}
//                 name="role"
//                 type="text"
//                 label="Enter your role"
//                 placeholder="student"
//               />
//               {errors.role && (
//                 <p className="text-xs text-red-600">{errors.role.message}</p>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center justify-center gap-4">
//             {/* input class ------- */}
//             <div className="flex-1">
//               <TextInput
//                 register={register}
//                 name="class"
//                 type="text"
//                 label="Enter your class"
//                 placeholder="inter first year"
//               />
//               {errors.class && (
//                 <p className="text-xs text-red-600">{errors.class.message}</p>
//               )}
//             </div>
//             {/* input group ------- */}
//             <div className="flex-1">
//               <TextInput
//                 register={register}
//                 name="group"
//                 type="text"
//                 label="Enter your group"
//                 placeholder="group A"
//               />
//               {errors.group && (
//                 <p className="text-xs text-red-600">{errors.group.message}</p>
//               )}
//             </div>
//           </div>
//           {/* date of birth */}
//           <div>
//             <TextInput
//               register={register}
//               name="date"
//               type="date"
//               label="Date of birth"
//               className=" text-slate-400"
//               // defaultValue={}
//             />
//           </div>
//           {errors.date && (
//             <p className="text-xs text-red-600">{errors.date.message}</p>
//           )}

//           {/* phone no */}
//           <div className="grid grid-cols-1 gap-4 lg:flex lg:items-center lg:justify-start">
//             <div className="lg:w-[20%]">
//               <SelectInput
//                 name="mobileCode"
//                 type="select"
//                 label="Select Country Code"
//                 register={register}
//                 options={mobileCodes}
//                 defaultValue={mobileCode}
//                 setValue={setMobileCode}
//                 className="z-20"
//               />
//             </div>
//             <div className="lg:w-[80%]">
//               <TextInput
//                 register={register}
//                 name="phone"
//                 type="text"
//                 label="Enter Your Phone Number"
//                 placeholder={phoneNumber}
//                 className="text-slate-400"
//               />
//               {errors.phone && (
//                 <p className="text-xs text-red-600">{errors.phone.message}</p>
//               )}
//             </div>
//           </div>
//           <div className="flex flex-col justify-center gap-5 md:flex-row">
//             {/* select country */}
//             <SelectInput
//               name="country"
//               type="select"
//               register={register}
//               label="Select Your Country"
//               options={countries}
//               defaultValue={country}
//               setValue={setCountry}
//               className="z-60"
//             />
//             {/* select gender */}
//             <SelectInput
//               name="gender"
//               type="select"
//               register={register}
//               options={gender}
//               label="Select Your Gender"
//               defaultValue={genderType}
//               setValue={setGenderType}
//               className="z-10"
//             />
//           </div>
//           <div>
//             <Button className="px-10 text-white">Save changes</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetails;
