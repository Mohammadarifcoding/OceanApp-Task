import Container from "@/Components/Shared/Container/Container";
import ProfileDetails from "./ProfileDetails";
import ProfileInfo from "./ProfileInfo";


const User = () => {
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    class: "10",
    group: "Science",
    countryCode: "+1",
    phoneNumber: "1234567890",
    country: "USA",
    gender: "Male",
    dateOfBirth:"2005-05-15T00:00:00.000Z"
};
  return (
    <Container>
      <ProfileInfo data={userData}/>
      {/* form */}
      <ProfileDetails data={userData} />
    </Container>

    
  );
};

export default User;
