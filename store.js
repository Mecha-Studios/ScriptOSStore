function copyLink(txtid, buttid){
    var input = document.getElementById(txtid);
    var btn = document.getElementById(buttid);
    input.select();
    document.execCommand('copy');
    btn.innerHTML = 'Copied!';
}
