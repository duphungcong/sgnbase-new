<template>
  <div class="column">
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header">
        <p class="card-header-title">BAO CAO TIEN DO DINH KY</p>
        <a class="card-header-icon">
            <b-icon
                :icon="props.open ? 'angle-down' : 'angle-up'">
            </b-icon>
        </a>
      </div>

      <div class="card-content">
          <b-field>
            <b-input maxlength="2000" type="tex" v-model="title"></b-input>
          </b-field>

          <b-field>
            <b-input maxlength="2000" type="textarea" v-model="content"></b-input>
          </b-field>

        <div class="buttons">
          <button class="button is-primary">Edit</button>
          <button class="button is-danger">Delete</button>
        </div>

      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      title: 'Báo cáo tiến độ định kỳ tàu S2-AHK ngày 11/12/2018',
      content: 'Kính gửi: MCC, Ban PTKD\n' +
        'CC: Tổng Giám đốc, P. Tổng Giám đốc phụ trách (b/c)\n' +
        '\n' +
        'Tàu S2-AHK đang hiện định kỳ RE-DELIVERY từ ngày 03/04/2018 tại NoT HCM. File đính kèm là tổng hợp tình hình định kỳ ngày 11/12/2018.\n' +
        '\n' +
        'Hôm nay cấu trúc, cabin tàu AHK tiếp tục thực hiện các NRC có hàng.(Các zone máy bay tạm dừng do tập trung nhân lực cho định kỳ A866)\n' +
        '\n' +
        'Tính đến hôm nay, tình trạng vật tư và NRC của S2-AHK như sau:\n' +
        '1. Tổng NRC raise: 4494 NRC\n' +
        '2. Đã đánh giá được: 4279 NRC;\n' +
        '3. NRC hoàn thành: 1457 NRC\n' +
        '4. Chưa đánh giá: 215 NRC (Chủ yếu do chờ thông tin phản hồi từ BIMAN)\n' +
        '5. NRC đã được khách hàng xác nhận thực hiện: 4025 NRC\n' +
        '6. Số NRC sẵn sàng để thực hiện (NRC đủ hàng và NRC không cần hàng): 1569 NRC\n' +
        '\n' +
        '7. S2-AHK đã đặt 5734 item, trong đó:\n' +
        '+ Vật tư đã về là 4351 item.\n' +
        '+ Vật tư đã có dự kiến ngày về (bao gồm vật tư vaeco đặt và khách hàng cung cấp) là 42 item.\n' +
        '+ Vật tư chưa có dự kiến ngày về (bao gồm vật tư đang hỏi giá và vật tư chờ khách hàng duyệt) là 1341 item. Trong đó có 32 item AOG, 494 item CRI và 815 item NOR.\n' +
        '\n' +
        'Ngày mai cabin, cấu trúc tàu AHK tiếp tục thực hiện NRC có hàng.(Các zone máy bay tạm dừng do tập trung nhân lực cho định kỳ A866)\n' +
        '\n' +
        'Trân trọng báo cáo,\n' +
        'Nguyễn Anh Dũng - PPC\n' +
        'T/L PGĐ NoT HCM Bùi Khánh Hội.',
    };
  },
};
</script>

<style scoped>
  .card-content {
    padding: 0.5em;
  }
</style>
