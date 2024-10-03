
import {  FaTachometerAlt } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import {  MdLibraryBooks } from 'react-icons/md';
import {  PiUserFill } from 'react-icons/pi';
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
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
        route: '/dashboard/notifications',
        title: 'Notifications',
        icon: IoMdNotifications
      },
      {
        route: '/dashboard/my-courses',
        title: 'My Courses',
        icon: MdLibraryBooks
      }
    ]
  }
];
