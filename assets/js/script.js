$(document).ready(function () {
    var syncSubs = new SyncSubs();
    $("#loadVideo").on("change", function () {
        syncSubs.changeVideo($(this).get(0).files[0]);
    });
});
function SyncSubs() {
    this.changeVideo = function (file) {
        var url = URL.createObjectURL(file);
        $("#vid").attr("src", url);
    };
}
//# sourceMappingURL=maps/script.js.map
