import React from 'react';
import './courseCard.css';
import { server } from '../../main';
import { useUserData } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { CourseData } from '../../context/CourseContext';


const CourseCard = ({courses}) => {
  const navigate = useNavigate();
  const {user,isAuth} = useUserData();

  const  {fetchCourses} = CourseData();

  
  const deleteHandler = async(id) =>{
   if(confirm("Are You Sure ! You Want To Delete This Course")){
    try {
      const {data} = await axios.delete(`${server}/api/course/${id}`,{
        headers:{
          token : localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      fetchCourses();
      
    } catch (error) {
      toast.error(error.response.data.message)
    }
   }
  }

  return (
    <div className="course-card">
        <img src={`${server}/${courses.image}`} alt="" className='course-image'/>
        <h3>{courses.title}</h3>
        <p>Instructor - {courses.createdBy}</p>
        <p>Duration -{courses.duration}</p>
        <p>Price - ₹{courses.price} /-</p>
        {
          isAuth ? ( 
          <>
          {user && user.role !== "admin" ? (<>
            {
              user.subscription.includes(courses._id) ? (

                <button onClick={()=>navigate(`/course/study/${courses._id}`)} className='common-btn'>
                  Study
                  </button>

              ) :(
                <button onClick={()=>navigate(`/course/${courses._id}`)} className='common-btn'>Get Started</button>

              )
            }
          </>) : 
          (
            <button onClick={()=>navigate(`/course/study/${courses._id}`)} className='common-btn'>Study</button>
          )}
          
          </>
        ):(
            <button onClick={()=>navigate("/login")} className='common-btn'>Get Started</button>

          )}

          <br />

          {
            user && user.role === "admin" && <button onClick={()=>deleteHandler(courses._id)} className='common-btn' style={{background:"red"}}>Delete </button>
          }
    </div>
  );
};

export default CourseCard;
