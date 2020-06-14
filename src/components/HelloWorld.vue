<template>
  <div class="hello">
    <download-excel
      class="btn btn-default myButton"
      :data="info"
      type="csv"
      name="survey.xls"
    >Download .csv</download-excel>

    <div>
      <vue-good-table
        style="padding-top:10px;"
        :columns="columns"
        :rows="info"
        :fixed-header="true"
        :pagination-options="{
    enabled: true,
    mode: 'records',
    perPage: 10,
    position: 'bottom',
    perPageDropdown: [3, 7, 9],
    dropdownAllowAll: false,
    setCurrentPage: 1,
    nextLabel: 'next',
    prevLabel: 'prev',
    rowsPerPageLabel: 'Rows per page',
    ofLabel: 'of',
    pageLabel: 'page', // for 'pages' mode
    allLabel: 'All',
  }"
      ></vue-good-table>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    columns: [
      {
        label: "ลำดับ",
        field: "ลำดับ",
        sortable: true,
       
      },

      {
        label: "คำถามเเบบตัวเลือกสเกล",
        field: "คำถามเเบบตัวเลือกสเกล",
         width: '150px'
      },
      { label: "คำถามเเบบตัวเลือก", field: "คำถามเเบบตัวเลือก", width: '150px' },
      {
        label: "ความยากง่ายในการตอบคำถาม",
        field: "ความยากง่ายในการตอบคำถาม"
      },
      {
        label: "การสะท้อนความเป็นจริง",
        field: "การสะท้อนความเป็นจริง"
      },
      {
        label: "โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน",
        field: "โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน"
      },
      {
        label: "เวลาที่ตอบ",
        field: "เวลาที่ตอบ",
        sortable: true
      }
    ],
    info: [],
    item: []
  }),
  mounted() {
    Axios.get("https://webserv.kmitl.ac.th/new4761/apis/getAllData.php").then(
      response =>
        response.data.data.forEach(element => {
          this.info.push({
            ลำดับ: element.id,
            เวลาที่ตอบ: element.date_created,
            ความยากง่ายในการตอบคำถาม: element.Vote_answer[0],
            การสะท้อนความเป็นจริง: element.Vote_answer[1],
            โดยภาพรวมนักศึกษาชอบเเบบไหนมากกว่ากัน: element.Vote_answer[2],
            คำถามเเบบตัวเลือก: element.Radio_answer,
            คำถามเเบบตัวเลือกสเกล: element.Slider_answer
          });
        })
    );
  },
  methods: {}
};
</script>


<style scoped>
.myButton {
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>