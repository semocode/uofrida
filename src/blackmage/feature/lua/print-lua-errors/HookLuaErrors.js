RE.Debugger.addExtension({
  name: "UILog",
  description:
    "Hooks the UILog to be printed in console instead of DebugWindow in client",
  disable: false,
  status: "stable",
  addr: null,

  onAnalyze: function () {},

  onHooking: function () {},
});
