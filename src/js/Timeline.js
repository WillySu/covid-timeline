class Timeline {
  constructor ({ svg, startDate, endDate, width, height, top, callback }) {
    this.svg = svg;
    this.width = width || 960;
    this.height = height || 50;
    this.top = top || 600;
    this.binG = this.svg.append("g").attr("class", "bin-group");
    this.binLabelG = this.svg.append("g").attr("class", "bin-label-group");
    this.startDate = startDate;
    this.endDate = endDate;
    this.callback = callback;
    this.selectedStartDate = undefined;
    this.selectedEndDate = undefined;
    if (this.startDate && this.endDate) {
      this.months = this.getMonths();
    }
  }

  static monthDiff (d1, d2) {
    let months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();

    return months;
  }

  static getMonthLabel (d) {
    let monthLabel = (d.getMonth() % 12) + 1
    let label = monthLabel === 1 ? d.getFullYear() : '';
    if (label) {
      label += "/";
    }
    label += monthLabel;
    return label;
  }

  getMonths () {
    const diff = Timeline.monthDiff(this.startDate, this.endDate);
    const months = [];
    const startYear = this.startDate.getFullYear();
    const startMonth = this.startDate.getMonth();

    for (let i = 0; i <= diff; i++) {
      months.push(new Date(startYear, startMonth + i));
    }

    return months;
  }

  onClick (date) {
    if (d3.event.shiftKey) {
      if (this.selectedEndDate === date) {
        this.selectedEndDate = undefined;
      } else {
        this.selectedEndDate = date;
      }
    } else {
      if (this.selectedStartDate === date) {
        this.selectedStartDate = undefined;
      } else {
        this.selectedStartDate = date;
      }
    }

    if (this.selectedStartDate === this.selectedEndDate) {
      this.selectedStartDate = undefined;
      this.selectedEndDate = undefined;
    }

    if (typeof this.callback === "function") {
      this.callback([this.selectedStartDate, this.selectedEndDate]);
    }

    this.reload();
  }

  reload () {
    this.binG.selectAll("g").data(this.months)
      .selectAll("rect")
        .classed("disabled", (d) =>
          d > this.selectedEndDate
          || d < this.selectedStartDate
        )
        .classed("selected", (d) =>
          d === this.selectedEndDate
          || d === this.selectedStartDate
        );
  }

  load ({ startDate, endDate }) {
    if (startDate) {
      this.startDate = startDate;
    }
    if (endDate) {
      this.endDate = endDate;
    }
    if (startDate || endDate) {
      this.months = this.getMonths();
    }
    
    const rectW = this.width / this.months.length;
    const binGroupEnterG = this.binG.selectAll("g").data(this.months).enter()
      .append("g").attr("class", "bin-sub-group");

    binGroupEnterG
      .append("rect")
        .attr("class", "bin-month")
        .attr("height", this.height)
        .attr("width", rectW)
        .attr("x", (d, i) => i * rectW)
        .attr("y", 600)
        .on("click", (d) => this.onClick(d));

    binGroupEnterG
      .append("text")
        .attr("x", (d, i) => i * rectW + (rectW / 2))
        .attr("y", 600)
        .text(Timeline.getMonthLabel);
  }
}
