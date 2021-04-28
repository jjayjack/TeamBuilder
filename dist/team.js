const generateTeam = (data) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Team</title>
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
    <div class="container-fluid">
       ${data}
    </div>
</body>
</html>`
}

function link(teamMem){
    let boots = "";
    teamMem.forEach(member => {
        boots += card(member);
    });
    return generateTeam(boots);
    
}
const card = (info) => {
    return `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${info.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${info.name}</h6>
                <p class="card-text">${info.id}</p>
                <p class="card-text">${info.email}</p>
                <p>${info.office}</p>
                <p>${info.github}</p>
                <p>${info.school}</p>
            </div>
        </div>`
}
module.exports = link;