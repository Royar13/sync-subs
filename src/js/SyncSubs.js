function SyncSubs() {
    this.changeVideo = function (file) {
        var url = URL.createObjectURL(file);
        $("#vid").attr("src", url);
    };
}