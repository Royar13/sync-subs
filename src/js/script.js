$(document).ready(function () {
    var syncSubs = new SyncSubs();
    $("#loadVideo").on("change", function () {
        syncSubs.changeVideo($(this).get(0).files[0]);
    });
});