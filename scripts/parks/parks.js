const ParksComponent = (park) => {
  return `
      <div class="park">
            <header class="park__header" id="h"><span style="font-weight: bold;">Name:</span> ${park.fullName}</header>
              <div><span style="font-weight: bold;">States:</span> ${park.states}</div>
              <div><span style="font-weight: bold;">Website:</span> ${park.url}</div>
              <div><span style="font-weight: bold;">Directions:</span> ${park.directionsUrl}</div>
              <div><span style="font-weight: bold;">Description:</span> ${park.description}</div>
              <button id="pictures--${park.id}">Pictures</button>
      </div>
  `
}

export default ParksComponent