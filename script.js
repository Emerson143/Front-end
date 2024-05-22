

const link = document.querySelectorAll('a');

link.forEach((link) => {
    const linkWidth = link.linkWidth
    const linkHeight = link.linkHeight
    if (linkWidth > 48 && linkHeight > 48)  {
        console.log(link, 'Possui acessibilidade')

    } else{
        console.log(link, 'Não Possui acessibilidade') 
    }
})

console.log(link);