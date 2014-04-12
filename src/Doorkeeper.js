function Doorkeeper(){
}

Doorkeeper.prototype.search = function(args){
    args = args || {};
    $("#event_area tr").remove();

    Doorkeeper.prototype.searchBase(args, Doorkeeper.prototype.eventCallback);
};

Doorkeeper.prototype.searchBase = function(args, eventCallback){
    var data = {};
    if(args.since){
        data.since = args.since;
    }
    if(args.until){
        data.until = args.until;
    }
    $.getJSON(
        "http://api.doorkeeper.jp/events?callback=?",
        data,
        function(response){
            $.each(response, function(index, obj){
                eventCallback(obj.event);
            });
        }
    );
};

Doorkeeper.prototype.eventCallback = function(event){
    var tr = $("<tr/>");
    $("<td/>").append( $("<a/>").attr("href", event.public_url).text(event.title)).appendTo(tr);
    $("<td/>").text(event.starts_at).appendTo(tr);

    tr.appendTo("#event_area");
};