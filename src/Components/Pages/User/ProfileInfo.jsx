import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProfileInfo = ({ data }) => {
  const { firstName, lastName } = data;
  return (
    <div>
      <div>
        <div className="flex items-center justify-between gap-3 ">
          <div className="flex items-center justify-start gap-3">
            <img src={'https://www.quick-skill.com/assets/girl-ELJokQLv.jpg'} className="size-24 rounded-full" alt="" />
            <div>
              <div className="space-y-1">
                <p className="text-lg font-semibold">{firstName + ' ' + lastName}</p>
                <p className="text-sm text-grayDefault">Student Status: Active</p>
              </div>
              <Link to="/forget-password">
                <p className="pt-2 text-xs text-primary">Change Password</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
