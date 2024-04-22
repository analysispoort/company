function toggleText(imgElement) {
    var description = imgElement.parentElement.parentElement.querySelector('.description');
    if (description.style.maxHeight === '0px' || description.style.maxHeight === '') {
      description.style.maxHeight = '100px'; 
      description.style.opacity = 1;
      description.style.padding = '10px 15px';  
      description.style.margin = '10px 0';  
    } else {
      description.style.maxHeight = '0px';
      description.style.opacity = 0;
      description.style.padding = '0 15px';  
      description.style.margin = '0';  
  }
}