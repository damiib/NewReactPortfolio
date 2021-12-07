import booksearch from '../Images/booksearch.png'
import budget from '../Images/budget.png'
import fitnesstracker from '../Images/fitnesstracker.png'
import GroupProject from '../Images/GroupProject.png'
import notetaker from '../Images/notetaker.png'
import techblog from '../Images/techblog.png'


export default function Portfolio() {
  return (
    <div className="portfolio_container" id="portfolio">
      <h1>Portfolio Page</h1>
            
              <h3> Book Search Engine </h3>
              <img src={booksearch} alt="Book Search" /> (width: 50%, height: 50%)
             This is a booksearch that you can find and save your favorite books
             <ul>
              <a href="https://github.com/damiib/Book-Search-Engine">Book Search Engine</a>  
              </ul>
              <br></br>
           <h3> Budget Project </h3>
           <img src={budget} alt="Budget Project"/> (width: 50%, height: 50%)
           This is a budging project to help you with your finances
             <a href="https://github.com/damiib/-Progressive-Budget">Budging Project</a>

             <br></br>
             <h3>Fitness Tracker</h3>
             <img src={fitnesstracker} alt="Fitness Tracker"/> (width: 50%, height: 50%) 
             If you want a better body, you can keep track of your workouts with this fitness tracker.
             <a href="https://github.com/damiib/Fitness-Tracker">Fitness Tracker</a>

             <br></br>
             <h3>Group Project</h3>
             <img src={GroupProject} alt="Group Project"/> (width: 50%, height: 50%) 
             This is a music blog for music lovers.  You can post about music concerts, your favorite artist or anything that is on your mind
             <a href="https://github.com/Aya-22/Music_Forum">Group Project</a>

             <br></br>
             <h3>Note Taker</h3>
             <img src={notetaker} alt="Note Taker"/> (width: 50%, height: 50%) 
             If you are a big notetaker, you will love this notetaker.  You can create, edit and delete your notes!
             <a href="https://github.com/damiib/HW-Note-Taker">Note Taker</a>

             
             <br></br>
             <h3>Tech Blog</h3>
             <img src={techblog} alt="Tech Blog"/> (width: 50%, height: 50%) 
             This is a blog where you can leave information and edit it or delete it any time
             <a href="https://github.com/damiib/TechBlog">Tech Blog</a>
               
    </div>
  );
}
