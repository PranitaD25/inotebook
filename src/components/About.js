import React from "react";

const About = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <h3>Add your Notes </h3> 
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h5>
            Create a new note: Tap on the "Add Notes" button or select the option to create a new note within the app's interface. This action usually takes you to a blank digital page or a lined template resembling a paper notebook.Write or type your notes Using a stylus, digital pen, or your device's keyboard, start adding content to your note. You can jot down text, draw diagrams, make sketches, or even insert images if the application supports those features. The iNotebook app typically provides various formatting options such as font styles, colors, and sizes to customize your notes.</h5>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h3>Edit Notes</h3>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h5>
              Edit and format your notes: The iNotebook application allows you to edit and format your notes just like you would with traditional paper-based notes. You can highlight text, underline or strikethrough words, change the font or color, create bullet or numbered lists, and apply other formatting options based on the available features.
              </h5>
            
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h3>Login and Start using</h3>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h5>All your Notes are safe and secure in cloud.Start using freely!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
