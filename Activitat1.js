function color(){
    let colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

    let totsMenorsQueMarró = colors.every(function(color) {
        return color < 'marró';
    });
    document.write("Tots els colors són menors que 'marró' :"+ totsMenorsQueMarró+"<br>");

    // Torna els colors que són menors que 'marró'
    let colorsMenorsQueMarró = colors.filter(function(color) {
        return color < 'marró';
    });
    document.write("Colors menors que 'marró': "+ colorsMenorsQueMarró+"<br>");

    // Torna els darrers 2 colors (independentment de quants hi hagin abans)
    let darrersDosColors = colors.slice(-2);
    document.write("Darrers dos colors: "+ darrersDosColors+"<br>");

    // Afegeix el color 'turquesa'
    colors.push('turquesa');
    document.write("Array amb 'turquesa' afegit: "+ colors+"<br>");

    // Elimina el color 'verd'
    let indexVerd = colors.indexOf('verd');
    if (indexVerd !== -1) {
        colors.splice(indexVerd, 1);
        document.write("Array amb 'verd' eliminat: "+ colors+"<br>");
    }
}


function demoArray(){
    let array = [1,2,3,4,5,6];

    

}