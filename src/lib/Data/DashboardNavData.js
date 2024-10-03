
import {  FaTachometerAlt } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import {  PiUserFill } from 'react-icons/pi';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaBookOpenReader } from 'react-icons/fa6';
export const DashboardData = [
  {
    title: 'General',
    routesData: [
      {
        route: '/dashboard',
        title: 'Dashboard',
        icon: FaTachometerAlt
      },
      {
        route: '/student-portal',
        title: 'Student Portal',
        icon:  PiStudentBold,

      },
      {
        route: '/profile',
        title: 'User',
        icon: PiUserFill
      },
    ]
  },
  {
    title: 'Management',
    routesData: [
      // student routes
      {
        route: '/faculty-overview',
        title: 'Faculty Management',
        icon: FaChalkboardTeacher
      },
      {
        route: '/notification',
        title: 'Notifications',
        icon: IoMdNotifications
      },
      {
        route: '/enroll-in-course',
        title: 'Enroll in Course',
        icon: FaBookOpenReader
      }
    ]
  }
];
