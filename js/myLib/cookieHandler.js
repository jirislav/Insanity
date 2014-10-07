var cookie = {
    set:function(cname, cvalue){
        var d=new Date();
        d.setTime(d.getTime()+(365*24*60*60*1000));
        var expires="expires="+d.toGMTString();
        document.cookie=cname+"="+cvalue+"; "+expires;
    },
    get:function(cname){
        if(cname!=null){
            var name=cname+"=",ca=document.cookie.split(';');
            for(var i=0;i<ca.length;i++){
                var c=ca[i].trim();
                if (c.indexOf(name)==0)
                    return c.substring(name.length,c.length);
            }
            return "";
        }
        console.log("All cookies on this page (including user-agent's):\n"+document.cookie);
    },
    del:function(pole){
        if(Array.isArray(pole)){
            var i = pole.length;
            while(i--) this.set(pole[i],"");
        }else{
            this.set(pole,"");
        }
    },
    log:function(pole){
        if(Array.isArray(pole)){
            var i=pole.length,tmp="";
            while(i--) tmp+="Cookie '"+pole[i]+"' = "+this.get(pole[i])+"\n";
            console.log(tmp);
        }else{
            console.log("Cookie '"+pole+"' = "+this.get(pole));
        }
    }
}
