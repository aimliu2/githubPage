---
layout: default
title: Markdown Page
---

# Header 1
Code Markdown Block

```md
---
layout: default
title: Start Page
---
```

## Header 2
### header 3
`see an image of Mona Lisa below`

<img id="image" class="skeleton" width="400" height="600">

<!-- ------------------------------- Script -------------------------------- -->
<script>
fetch("https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg")
  .then(async (res) => {
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob);
    const img = document.querySelector("#image")
    img.src = imageObjectURL
    img.classList.remove("skeleton");
  })
</script>


<!-- -------------------------------- Style -------------------------------- -->
<style>
 /* THE LOADING EFFECT */
.skeleton {
background-color: #e2e5e7;
 /* The shine that's going to move across the skeleton: */
background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
background-size: 40px 100%; 
/* width of the shine */
background-repeat: no-repeat; 
/* No need to repeat the shine effect */
background-position: left -40px top 0;
/* Place shine on the left side, with offset on the left based on the width of the shine - see background-size */
animation: shine 1s ease infinite;  
/* increase animation time to see effect in 'slow-mo' */
}

@keyframes shine {
    to {
         /* Move shine from left to right, with offset on the right based on the width of the shine - see background-size */
        background-position: right -40px top 0;
    }
}
</style>