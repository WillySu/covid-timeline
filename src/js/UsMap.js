class UsMap {
  // Need topology to generate State Borders
  // Need topoJson to generate State Paths
  constructor ({ svg, topology, topoJson, maxCase }) {
    this.svg = svg;
    this.countiesG = this.svg.append("g").attr("class", "counties");
    this.topology = topology;
    this.topoJson = topoJson;
    this.maxCase = maxCase || 100;
    this.getFillColor = UsMap.getFillColorFunc(0, maxCase);
    this.path = d3.geoPath();
  }

  static getCountyMouseOverText (data) {
    const { id, properties } = data;
    const { county_name: name, cases } = properties;
    if (name) {
      return name + " (" + id + ") - " + cases + " case" + (cases === 1 ? "" : "s");
    }
  
    return id;
  }

  static getFillColorFunc (min, max) {
    return d3.scaleQuantize()
      .domain([min, max])
      .range(["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]);
  }

  load ({ topoJson, maxCase }) {
    if (topoJson) {
      this.topoJson = topoJson;
    }

    this.loadStateBorders();
    this.loadCounties(maxCase);
  }

  reload({ topoJson }) {
    if (topoJson) {
      this.topoJson = topoJson;
    }

    this.countiesG
      .selectAll("path")
      .data(this.topoJson)
      .style("fill", (d) => this.getFillColor(d.properties.cases))
        .select("title")
          .text(UsMap.getCountyMouseOverText);
  }

  loadCounties (maxCase) {
    if (maxCase) {
      this.getFillColor = UsMap.getFillColorFunc(0, maxCase);
    }

    this.countiesG
      .selectAll("path")
      .data(this.topoJson)
      .enter()
        .append("path")
          .attr("d", this.path)
          .style("fill", (d) => this.getFillColor(d.properties.cases))
            .append("title")
              .text(UsMap.getCountyMouseOverText);
  }

  loadStateBorders () {
    const { path, svg, topology } = this;

    svg.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(topology, topology.objects.states, (a, b) => a !== b)));
  }
}

