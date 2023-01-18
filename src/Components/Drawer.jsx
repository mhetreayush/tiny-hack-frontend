// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";
// import slugify from "react-slugify";
// import { AiOutlineMenu } from "react-icons/ai";
// import { AiOutlineHome } from "react-icons/ai";
// import { MdLightMode, MdDarkMode } from "react-icons/md";
// import { seventyFivePercent } from "../HelperFunctions/helperFunctions";
// const Navbar = (props) => {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const { newsObj } = props;
//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };
//   const drawerWidth = seventyFivePercent();
//   const iconClass = `rounded-md bg-gray-500 text-white hover:bg-gray-600  dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-600 `;
//   const drawer = (
//     <>
//       <Box
//         onClick={() => handleDrawerToggle}
//         sx={{ textAlign: "center" }}
//         className="bg-gray-200"
//       >
//         <div className="sticky top-0  drop-shadow-md pb-4 pt-1 bg-gray-300 dark:bg-gray-800 dark:text-white">
//           <Typography variant="h4" sx={{ my: 2 }}>
//             News
//           </Typography>
//           <Divider className="bg-gray-800 dark:bg-white" />
//         </div>
//         <div className="flex flex-col gap-y-4 bg-gray-300 dark:bg-gray-800 ">
//           {React.Children.toArray(
//             newsObj.map((item) => (
//               <Link
//                 onClick={() => props.setCurrentPage(item.title)}
//                 className={`odd:bg-gray-100  dark:text-white  dark:odd:bg-gray-700 text-left p-2 hover:!bg-gray-600 hover:text-white dark:hover:!bg-black dark:hover:!text-white ${
//                   props.currentPage === item.title &&
//                   "!bg-gray-600 text-white !dark:bg-black !dark:text-white"
//                 } `}
//                 to={"/news-website/" + slugify(item.title)}
//               >
//                 {item.title}
//               </Link>
//             ))
//           )}
//         </div>
//       </Box>
//     </>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <div className="sticky top-0 bg-gray-400 drop-shadow-md dark:bg-gray-800">
//         <Toolbar className="flex justify-between items-center py-4">
//           <AiOutlineMenu
//             aria-label="open drawer"
//             onClick={handleDrawerToggle}
//             size={40}
//             className={`p-2 cursor-pointer ${iconClass}`}
//           />
//           <div className="flex gap-x-3">
//             {props.currentPage !== "/news-website/" && (
//               <Link
//                 onClick={() => props.setCurrentPage("/news-website/")}
//                 to="/news-website/"
//                 className={`px-4 py-2 flex  ${iconClass}`}
//               >
//                 <AiOutlineHome size={30} />
//               </Link>
//             )}
//             <div>
//               <button
//                 onClick={() =>
//                   props.setTheme(props.theme === "light" ? "dark" : "light")
//                 }
//                 className={`px-4 py-2 ${iconClass}`}
//               >
//                 {props.theme === "light" ? (
//                   <MdLightMode size={30} />
//                 ) : (
//                   <MdDarkMode size={30} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </Toolbar>
//         <div>
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             className="bg-gray-400/50 drop-shadow-md dark:bg-gray-800/50 drawerClass"
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               "& .MuiDrawer-paper": {
//                 boxSizing: "border-box",
//                 width: drawerWidth,
//                 backgroundColor:
//                   localStorage.getItem("theme") === "light"
//                     ? "rgb(209 213 219)"
//                     : "rgb(31 41 55)",
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </div>
//       </div>

//       <div>{props.children}</div>
//     </>
//   );
// };

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

// export default Navbar;
