const ParksComponent = park => {
  return `
      <div class="park">
            <header class="park__header">Name: ${park.fullName}</header>
              <div>States: ${park.states}</div>
              <div>Website: ${park.url}</div>
              <div>Directions: ${park.directionsUrl}</div>
              <div>Description: ${park.description}</div>
              <button id="pictures--${park.id}">Pictures</button>
              <dialog class="pictures">
              <div id="picture__content"></div>
              <button class="close--Pics">close</button>

              </dialog>
      
      </div>
  `;
};

export default ParksComponent;
