Package.describe({
  summary: "An awesome genome browser component"
});

Package.on_use(function (api) {
  api.add_files('js/bam.js', 'client');
  api.add_files('js/bigwig.js', 'client');
  api.add_files('js/bin.js', 'client');
  api.add_files('js/cbrowser.js', 'client');
  api.add_files('js/chainset.js', 'client');
  api.add_files('js/color.js', 'client');
  api.add_files('js/das.js', 'client');
  api.add_files('js/domui.js', 'client');
  api.add_files('js/feature-draw.js', 'client');
  api.add_files('js/feature-popup.js', 'client');
  api.add_files('js/features.js', 'client');
  api.add_files('js/karyoscape.js', 'client');
  api.add_files('js/kspace.js', 'client');
  api.add_files('js/quant-config.js', 'client');
  api.add_files('js/sample.js', 'client');
  api.add_files('js/sequence-tier.js', 'client');
  api.add_files('js/sha1.js', 'client');
  api.add_files('js/slider.js', 'client');
  api.add_files('js/spans.js', 'client');
  api.add_files('js/tier.js', 'client');
  api.add_files('js/track-adder.js', 'client');
  api.add_files('js/twoBit.js', 'client');
  api.add_files('js/utils.js', 'client');
  api.add_files('js/version.js', 'client');
  api.add_files('js/cycle.js', 'client');
  api.add_files('js/json2.js', 'client');
  api.add_files('jszlib/js/inflate.js', 'client');
});
