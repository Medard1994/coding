document.getElementById('button').addEventListener('click', function() {
    const Input = document.getElementById('input');
    const Input2 = document.getElementById('input2');

    const inside = Input.value;
    const url = Input2.value;

    if (inside && url) {
        const paragraElement = document.getElementById('apearElement');
        const section = document.createElement('section');
        
        section.innerHTML = `
          <div id="h">
    <section> 

        <strong style="color: blue;">${inside}</strong><br>
             <p style="color: rgb(48, 48, 209);">
                 <i class="fa fa-external-link" aria-hidden="true"></i>
                 <a href="${url}" target="_blank">${url}</a>
             </p>
             
             <button style="color: white; background-color: rgb(17, 187, 136); width: 100px; 
                height: 40px; border: 2px solid whitesmoke; border-radius: 6px;" 
                class="editButton">
                <i class="fa fa-external-link" aria-hidden="true"></i> Edit
             </button>
             <button style="color: white; background-color: rgb(173, 48, 48); width: 100px; 
                height: 40px; border: 2px solid whitesmoke; border-radius: 6px;" 
                 class="deleteButton">
                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                
             </p>
             </button>
             </section> 
      </div>
        `;

        apearElement.appendChild(section);
        Input.value = '';
        Input2.value = '';
        section.querySelector('.deleteButton').addEventListener('click', function() {
            paragraElement.removeChild(section);
        });
        section.querySelector('.editButton').addEventListener('click', function() {
            Input.value = inside;
            Input2.value = url;
            paragraElement.removeChild(section);
        });
    } else {
        alert('Please fill in both fields.');
    }
}); 