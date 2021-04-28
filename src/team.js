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
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-fluid head">
    <h1>My Team</h1>
    </div>
    <div class="body">
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
    let manage = "";
    let engine = "";
    let intrn = "";
    if(info.getRole() == "Manager") {
        manage = `<p>${info.officeNumber}</p>`
    } else if(info.getRole() == "Engineer") {
        engine = `<a href="https://github.com/${info.github}">${info.github}</a>`
    } else if(info.getRole() =="Intern") {
        intrn = `<p>${info.school}</p>`;
    }

    return `<div class="col card member" style="width: 18rem;">
            <div class="card-body">
                <h1 class="card-title">${info.getRole()}</h1>
                <h2 class="card-subtitle mb-2 text-muted">${info.name}</h2>
                <p class="card-text">Id: ${info.id}</p>
                <a href="mailto:${info.email}" class="card-text">Email: ${info.email}</a>
                ${manage}
                ${engine}
                ${intrn}  
            </div>
        </div>`
}
module.exports = link;