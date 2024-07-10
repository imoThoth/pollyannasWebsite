import React, { useState } from 'react';
import "../projects/ProjectStyle.css";

const TestProject = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <div>

    <div className='projectContainer'>
        <h1>Project Name</h1>
        <hr />

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet. Molestie a iaculis at erat pellentesque adipiscing. Varius sit amet mattis vulputate enim. Sapien faucibus et molestie ac feugiat sed. Et tortor consequat id porta. Habitant morbi tristique senectus et netus et malesuada fames ac. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Mi proin sed libero enim sed faucibus. Sagittis vitae et leo duis ut diam quam nulla. Facilisis sed odio morbi quis. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Nascetur ridiculus mus mauris vitae ultricies leo integer. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Odio euismod lacinia at quis risus sed vulputate. Dictumst quisque sagittis purus sit amet.
        </p>
   
        <p> 
        Aliquam purus sit amet luctus venenatis. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Vitae purus faucibus ornare suspendisse. Urna neque viverra justo nec ultrices. Eget nulla facilisi etiam dignissim diam quis enim. Id neque aliquam vestibulum morbi blandit cursus. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quam quisque id diam vel quam elementum pulvinar. Nunc lobortis mattis aliquam faucibus purus in massa. Fringilla phasellus faucibus scelerisque eleifend donec. In tellus integer feugiat scelerisque varius morbi enim. Facilisis sed odio morbi quis commodo odio.
        </p>
       
       <p>
       Type - Costume Design
       </p>

       <p>
       Genre - Short Film
       </p>

       <p>
       Year - 2024
       </p>
    </div>
    

    {/* Tab */}
    <div className='container'>

        <div className='bloc-tabs'>
            
            <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>All</button>
            <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>Set</button>
            <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>Costume</button>
        </div>

        <div className='content-tabs'>
            <div  className={toggleState === 1 ? "content active-content" : "content"}>
                <h2>Content 1</h2>
                <hr />
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Purus in mollis nunc sed id semper risus. Id nibh tortor id aliquet lectus proin,
                At tempor commodo ullamcorper a lacus.
                </p>
            </div>

            <div className={toggleState === 2 ? "content active-content" : "content"}>
                <h2>Content 2</h2>
                <hr/>
                <p>
                Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. 
                Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pellentesque eu tincidunt tortor aliquam nulla facilisi.
                Eget felis eget nunc lobortis mattis aliquam faucibus. 
                </p>
            </div>

            <div className={toggleState === 3 ? "content active-content" : "content"}>
                <h2>Content 3</h2>
                <hr />
                <p>
                Dui sapien eget mi proin sed libero enim sed faucibus.  
                Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. 
                Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.
                </p>
            </div>

        </div>

    </div>
</div>
  )
}

export default TestProject;
