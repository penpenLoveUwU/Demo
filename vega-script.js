import sunshineData from 'sunshine.csv'          
     // setup API options
      const options = {
        config: {
          // Vega-Lite default configuration
        },
        init: (view) => {
          // initialize tooltip handler
          view.tooltip(new vegaTooltip.Handler().call);
        },
        view: {
          // view constructor options
          // remove the loader if you don't want to default to vega-datasets!
        //   loader: vega.loader({
        //     baseURL: "",
        //   }),
          renderer: "canvas",
        },
      };
      console.log(sunshineData);
      // register vega and vega-lite with the API
      vl.register(vega, vegaLite, options);
     // var sunshine = add_data(vl, sunshine.csv, format_type = NULL);
      // your visualization goes here
      vl.markPoint({filled:true, color:'teal'})
      .data(sunshineData)
      .select(
          vl.selectInterval().bind('scales')    // Just adding a line of code, how amazing!
      )
      .encode(
          vl.x().fieldQ('month'),
          vl.y().fieldQ('sunshine'),
          vl.tooltip(['city'])
      )
      .render()
      .then(viewElement => {
        // render returns a promise to a DOM element containing the chart
        // viewElement.value contains the Vega View object instance
        document.getElementById('view').appendChild(viewElement);
      });