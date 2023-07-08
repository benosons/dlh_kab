"use strict";
console.log("You are running jQuery version: " + $.fn.jquery);
// Kode Per Kota
$("#kota_kabupaten").val('KABUPATEN BANDUNG').prop('disabled', true);
var kota = 32.04;
$("#kode_kota").val(kota);
var role = $('#isRole').val();
$(document).ready(function () {
    $("#data_permohonan_btn").click(function(){
      $("#profile-perusahaan-page").hide();
      $("#permohonan-teknis-page").show();
      $("#data_perusahaan_btn").removeClass("active");
      $("#data_permohonan_btn").addClass("nav-link active");
    });
    $("#data_perusahaan_btn").click(function(){
      $("#profile-perusahaan-page").show();
      $("#permohonan-teknis-page").hide();
      $("#data_permohonan_btn").removeClass("active");
      $("#data_perusahaan_btn").addClass("nav-link active");
    });

    $("#back-all-permohonan-admin").click(function(){
      $("#permohonan-all").show();
      $("#detail").hide();
    });
    $("#back-all-permohonan").click(function(){
        location.reload();
      $("#permohonan-teknis-page").show();
      $("#editdataini").show();
      $("#form-detail").hide();
      $("#mohon_save").hide();
    });

  $("#nav-menu li").removeClass();
  // $('#nav-menu li#menu-data').addClass('open');
  $("#nav-menu li#menu-teknis").addClass("active");
  $("#mohon_save").prop("disabled", true);
  $('[name="id-input-file-3"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      icon_remove: "",
      no_icon: "",
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#submit_kajian").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      if ($("#bab_kajian").val() != 0) {
        $("#submit_kajian").prop("disabled", false);
      } else {
        $("#submit_kajian").prop("disabled", true);
      }
    });

  $("#bab_kajian").on("change", function () {
    if ($('[name="id-input-file-3"]').val() == "" && $(this).val() == 0) {
      $("#submit_kajian").prop("disabled", true);
    } else if ($('[name="id-input-file-3"]').val() == "" && $(this).val()) {
      $("#submit_kajian").prop("disabled", true);
    } else if ($('[name="id-input-file-3"]').val() && $(this).val() == 0) {
      $("#submit_kajian").prop("disabled", true);
    } else {
      $("#submit_kajian").prop("disabled", false);
    }
  });

  $('[name="id-input-file-4"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      icon_remove: '',
      no_icon: '',
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#submit_standar").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      if ($("#bab_standar").val() != 0) {
        $("#submit_standar").prop("disabled", false);
      } else {
        $("#submit_standar").prop("disabled", true);
      }
    });

  $("#bab_standar").on("change", function () {
    if ($('[name="id-input-file-4"]').val() == "" && $(this).val() == 0) {
      $("#submit_standar").prop("disabled", true);
    } else if ($('[name="id-input-file-4"]').val() == "" && $(this).val()) {
      $("#submit_standar").prop("disabled", true);
    } else if ($('[name="id-input-file-4"]').val() && $(this).val() == 0) {
      $("#submit_standar").prop("disabled", true);
    } else {
      $("#submit_standar").prop("disabled", false);
    }
  });

  $('[name="id-input-file-5"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#mohon_save").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      $("#mohon_save").prop("disabled", false);
    });

  $('[name="id-input-file-6"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#submit_doc_lapangan").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      $("#submit_doc_lapangan").prop("disabled", false);
    });

  $('[name="id-input-file-lampiran"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      icon_remove: "",
      no_icon: "",
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#submit_lampiran").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      if ($("#bab_lampiran").val() != 0) {
        $("#submit_lampiran").prop("disabled", false);
      } else {
        $("#submit_lampiran").prop("disabled", true);
      }
    });

  $('[name="id-input-file-lampiran-2"]')
    .ace_file_input({
      no_file: "tidak ada file ...",
      btn_choose: "Pilih File",
      btn_change: "Ganti",
      no_icon: '',
      icon_remove: '',
      droppable: false,
      onchange: null,
      thumbnail: false, //| true | large
      //whitelist:'gif|png|jpg|jpeg'
      //blacklist:'exe|php'
      //onchange:''
      //
      before_remove: function () {
        $("#submit_lampiran-2").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      if ($("#bab_lampiran-2").val() != 0) {
        $("#submit_lampiran-2").prop("disabled", false);
      } else {
        $("#submit_lampiran-2").prop("disabled", true);
      }
    });

  $("#bab_lampiran").on("change", function () {
    if (
      $('[name="id-input-file-lampiran"]').val() == "" &&
      $(this).val() == 0
    ) {
      $("#submit_lampiran").prop("disabled", true);
    } else if (
      $('[name="id-input-file-lampiran"]').val() == "" &&
      $(this).val()
    ) {
      $("#submit_lampiran").prop("disabled", true);
    } else if (
      $('[name="id-input-file-lampiran"]').val() &&
      $(this).val() == 0
    ) {
      $("#submit_lampiran").prop("disabled", true);
    } else {
      $("#submit_lampiran").prop("disabled", false);
    }
  });

  $("#bab_lampiran-2").on("change", function () {
    if (
      $('[name="id-input-file-lampira-2n"]').val() == "" &&
      $(this).val() == 0
    ) {
      $("#submit_lampiran-2").prop("disabled", true);
    } else if (
      $('[name="id-input-file-lampiran-2"]').val() == "" &&
      $(this).val()
    ) {
      $("#submit_lampiran-2").prop("disabled", true);
    } else if (
      $('[name="id-input-file-lampiran-2"]').val() &&
      $(this).val() == 0
    ) {
      $("#submit_lampiran-2").prop("disabled", true);
    } else {
      $("#submit_lampiran-2").prop("disabled", false);
    }
  });

  $("#modal_program").on("shown.bs.modal", function () {});

  $("#all-permohonan").DataTable();
  $("#permohonan-table").DataTable();
  $("#data-file").DataTable();

  // var role = $('#isRole').val();
  // if (role == 100 || 10) {
  //   loadpermohonan("1");
  //   loadperusahaan();
  // } else {
    loadpermohonan("1");
    getkecamatan(kota);    
  // }

  $("#verlapanganini").on("click", function () {
    actionlapangan("view", $("#idpermohonan").val(), $("#initype").val());
  });
 
  $("#save_edit_perusahaan").on("click", function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
      buttons: {
        confirm: {
          label: '<i class="bx bx-check"></i> Ya',
          className: "btn-success btn-xs",
        },
        cancel: {
          label: '<i class="bx bx-x"></i> Tidak',
          className: "btn-danger btn-xs",
        },
      },
      callback: function (result) {
        if (result) {
          var formDataPe = new FormData();
          if($('#ideditperusahaan').val()){
            formDataPe.append("id_perusahaan", $('#ideditperusahaan').val());
          }
          formDataPe.append("param", "data_perusahaan");
          formDataPe.append("type", "1");
          formDataPe.append("input_1", $("#edit_1").val());
          
          formDataPe.append("input_2", $("#edit_2").val());
          
          formDataPe.append("input_3", $("#edit_3").val());
          
          formDataPe.append("input_9", $("#edit_9").val());
          
          formDataPe.append("input_4", $("#edit_4").val());
          
          formDataPe.append("input_5", $("#edit_5").val());
          updateperusahaan(formDataPe);
        } 
      }
    });

  });

  // function loadperusahaan() {
  //   $.ajax({
  //     type: "post",
  //     dataType: "json",
  //     url: "loadperusahaan",
  //     data: {
        
  //     },
  //     success: function (result) {
  //       console.log(result.data);
  //     }

  //   });
  // }

  function updateperusahaan(formDataPe){
    var dialog = bootbox.dialog({
      message:
      '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false,
    });

    $.ajax({
      type: "post",
      processData: false,
      contentType: false,
      url: "addperusahaan",
      data: formDataPe,
      success: function (result) {
        dialog.modal("hide");
        Swal.fire({
          type: "success",
          title: "Berhasil Merubah Data Perusahaan !",
          showConfirmButton: true,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
        }).then((result) => {
          $(document).ready(function () {
            location.reload();
          });
        });
      },
    });
  }


  $("#mohon_save_perusahaan").on("click", function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
      buttons: {
        confirm: {
          label: '<i class="bx bx-check"></i> Ya',
          className: "btn-success btn-xs",
        },
        cancel: {
          label: '<i class="bx bx-x"></i> Tidak',
          className: "btn-danger btn-xs",
        },
      },
      callback: function (result) {
        if (result) {
          var formDataP = new FormData();
          if($('#ideditperusahaan').val()){
            formData.append("id_perusahaan", $('#ideditperusahaan').val());
          }
          formDataP.append("param", "data_perusahaan");
          formDataP.append("type", "1");
          formDataP.append("input_1", $("#input_1").val());
          
          formDataP.append("input_2", $("#input_2").val());
          
          formDataP.append("input_3", $("#input_3").val());
          
          formDataP.append("input_9", $("#input_9").val());
          
          formDataP.append("input_4", $("#input_4").val());
          
          formDataP.append("input_5", $("#input_5").val());
          // for (let index = 1; index <= 9; index++) {
          //   if ($("#input_" + index).val()) {
          //     formDataP.append("input_" + index, $("#input_" + index).val());
          //     $("#input_" + index)
          //       .parent()
          //       .parent()
          //       .removeClass("has-error");
          //     berapa.push(index);
          //   } else {
          //     $("#input_" + index)
          //       .parent()
          //       .parent()
          //       .addClass("has-error");
          //   }
          // }

          formDataP.append(
            "file[doc_izin_lingkungan]",
            $("#doc_izin_lingkungan")[0].files[0]
          );

          formDataP.append(
            "file[doc_nib]", 
            $("#doc_nib")[0].files[0]
          );

          formDataP.append(
            "file[doc_penapisan_mandiri]",
            $("#doc_penapisan_mandiri")[0].files[0]
          );
          // formDataP.append("bab_kajian", $('#bab_kajian').val());
          // formDataP.append("file[doc_standar]", $('#doc_standar')[0].files[0]);
          // formDataP.append("bab_standar", $('#bab_standar').val());
          saveperusahaan(formDataP);
        } 
      }
    })

  });

  function saveperusahaan(formDataP) {
    var dialog = bootbox.dialog({
      message:
        '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
      closeButton: false,
    });
  
    $.ajax({
      type: "post",
      processData: false,
      contentType: false,
      url: "addperusahaan",
      data: formDataP,
      success: function (result) {
        dialog.modal("hide");
        Swal.fire({
          type: "success",
          title: "Berhasil Tambah Permohonan !",
          showConfirmButton: true,
          // showCancelButton: true,
          confirmButtonText: `Ok`,
        }).then((result) => {
          $(document).ready(function () {
            location.reload();
          });
        });
      },
    });
  }


  $("#mohon_save").on("click", function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
      buttons: {
        confirm: {
          label: '<i class="bx bx-check"></i> Ya',
          className: "btn-success btn-xs",
        },
        cancel: {
          label: '<i class="bx bx-x"></i> Tidak',
          className: "btn-danger btn-xs",
        },
      },
      callback: function (result) {
        
        if (result) {
          var email   = document.getElementById("input_6").value;
          var telepon = document.getElementById("input_7").value;
          var alamat  = document.getElementById("input_8").value;
          var regency = document.getElementById("kota_kabupaten").value;
          var district = document.getElementById("select_kecamatan").value;
          var village = document.getElementById("select_kelurahan").value;
          if(email == "" && telepon == "" && alamat == "" && village == "" && regency == "" && district == ""){
            var dialog = bootbox.dialog({
              message:
                '<p class="text-center mb-0">Mohon lengkapi data anda</p>',
            });
            function close() {
              dialog.modal("hide");
            }
            setTimeout(close, 3000);
          }else{
            var formData = new FormData();
            if($('#ideditpermohonan').val()){
              formData.append("id_permohonan", $('#ideditpermohonan').val());
            }
            formData.append("param", "data_permohonan");
            formData.append("type", "1");
            formData.append("id_perusahaan", $('#idpermohonan').val());
            let berapa = [];
            for (let index = 6; index <= 8; index++) {
              if ($("#input_" + index).val()) {
                formData.append("input_" + index, $("#input_" + index).val());
                $("#input_" + index)
                  .parent()
                  .parent()
                  .removeClass("has-error");
                berapa.push(index);
              } else {
                var dialog = bootbox.dialog({
                  message:
                    '<p class="text-center mb-0">Mohon lengkapi data anda</p>',
                });
                function close() {
                  dialog.modal("hide");
                }
                setTimeout(close, 3000);
              }
            }

            formData.append("kotakab", $("#kode_kota").val());
            formData.append("kecamatan", $("#select_kecamatan").val());
            formData.append("kelurahan", $("#select_kelurahan").val());
            formData.append("kategori", $("#select_kategori").val());
            formData.append("jenis", $("#select_jenis").val());

            formData.append(
              "file[doc_permohonan]",
              $("#doc_permohonan")[0].files[0]
            );
            // formData.append(
            //   "file[doc_izin_lingkungan]",
            //   $("#doc_izin_lingkungan")[0].files[0]
            // );
            // formData.append("file[doc_nib]", $("#doc_nib")[0].files[0]);
            // formData.append(
            //   "file[doc_penapisan_mandiri]",
            //   $("#doc_penapisan_mandiri")[0].files[0]
            // );
            // formData.append("bab_kajian", $('#bab_kajian').val());
            // formData.append("file[doc_standar]", $('#doc_standar')[0].files[0]);
            // formData.append("bab_standar", $('#bab_standar').val());
            
            if (berapa.length == 3) {
              save(formData);
            }
          }
        }
      },
    });
  });

  $("#submit_kajian").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID").val());
    formData.append("param", "param_file");
    formData.append("type", "1");
    formData.append("kategori", $("#inikategori").val());

    formData.append("file[doc_kajian]", $("#doc_kajian")[0].files[0]);
    formData.append("bab", $("#bab_kajian").val());

    upload(formData);
  });

  $("#submit_lampiran").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID").val());
    formData.append("param", "param_file");
    formData.append("type", "1");
    formData.append("kategori", $("#inikategori").val());

    formData.append("file[doc_lampiran]", $("#doc_lampiran")[0].files[0]);
    formData.append("bab", $("#bab_lampiran").val());
    formData.append("kategoriparam", "1");

    upload(formData);
  });

  $("#submit_lampiran-2").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID").val());
    formData.append("param", "param_file");
    formData.append("type", "1");
    formData.append("kategori", $("#inikategori").val());

    formData.append("file[doc_lampiran]", $("#doc_lampiran-2")[0].files[0]);
    formData.append("bab", $("#bab_lampiran-2").val());
    formData.append("kategoriparam", "2");

    upload(formData);
  });

  $("#submit_standar").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID").val());
    formData.append("param", "param_file");
    formData.append("type", "1");
    formData.append("kategori", $("#inikategori").val());

    formData.append("file[doc_standar]", $("#doc_standar")[0].files[0]);
    formData.append("bab", $("#bab_standar").val());

    upload(formData);
  });

  $("#doc_kajain").on("change", function () {});

  $("#cekunggahan").on("click", function () {
    action(
      "view",
      $("#idpermohonan").val(),
      $("#initype").val(),
      $("#inikategori").val()
    );
  });

  $("#initambah").on("click", function () {
    $("#form-detail").show();
    $("#ideditpermohonan").val('');
    $("#input_6").val('');
    $("#input_7").val('');
    $("#input_8").val('');
    $("#kota_kabupaten").prop('disable', true);
    // $("#select_kecamatan").val('');
    // $("#select_kelurahan").val('');
    $("#select_kategori").val('');
    $("#select_jenis").val('');
    $("#doc_permohonan").val('');
    $("#form-upload-permohonan").show();
    $("#editdataini").hide();
    $("#permohonan-teknis-page").hide();
    $("#permohonan-teknis-admin").hide();
    $("#mohon_save").prop('disabled', false).show();
    // $('#modal_program').modal({backdrop: 'static', keyboard: false})
    // $('#modal_program').modal('show')
    // for (let index = 1; index <= 3; index++){
    //   $(`#input_${index}`).val('')
    // }
    // $('#ideditpermohonan').val('')
    // $('#doc_permohonan').val('')
    // $('#form-upload-permohonan').show()
    // $("#mohon_save").prop('disabled', false);
  });

  $("#editdataini").on("click", function () {
      $("#input_6").prop("disabled", false);
      $("#input_7").prop("disabled", false);
      $("#input_8").prop("disabled", false);
      $("#kota_kabupaten").prop("disabled", true);
      $("#select_kecamatan").prop("disabled", false);
      // $("#select_kelurahan").val().trigger('change');
      $("#select_kelurahan").prop("disabled", false);
      $("#select_kategori").prop("disabled", false);
      $("#select_jenis").prop("disabled", false);
      $("#form-upload-permohonan").hide();
      $("#mohon_save").prop('disabled', false).show();
      $("#editdataini").hide();
      editperusahaan(1);
  });

  function editperusahaan(param) {
    $.ajax({
      type: "post",
      dataType: "json",
      url: "loadpermohonan",
      data: {
        param: param,
      },
      success: function (result) {
        let code = result.code;
          if (code != "0") {
            let data = result.data

            $("#ideditperusahaan").val(data["id"]);
            $("#edit_1").val(data["nama_usaha"]).prop("disabled", false);
            $("#edit_2").val(data["bidang_usaha"]).prop("disabled", false);
            $("#edit_3").val(data["nib"]).prop("disabled", false);
            $("#edit_4").val(data["penanggung_jawab"]).prop("disabled", false);
            $("#edit_5").val(data["jabatan"]).prop("disabled", false);
            $("#edit_9").val(data["no_kbli"]).prop("disabled", false);
          
            for (var f in data["file"]) {
              var jenisnya = data.file[f]["jenis"];
              var oknya = data.file[f]["ok"];
              
              switch (jenisnya) {
                case "doc_permohonans":
                  $("#nama-file-permohonan").html(data.file[f]["filename"]);
                  $("#nama-file-permohonan").attr(
                    "onclick",
                    "downloadatuh('" +
                      "public/" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );
                  $("#hapus-permohonan").attr(
                    "onclick",
                    "actionfile('delete','" +
                      data.file[f]["id"] +
                      "','" +
                      data.type +
                      "','" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );

                  $("#view-file-permohonan").css("display", "block");
                  $("#form-permohonan-reupload").css("display", "none");

                  if (oknya == 1) {
                    $("#hapus-permohonan").css("display", "none");
                  } else {
                    $("#hapus-permohonan").show();
                    if (oknya == 2) {
                      var ell = ` <li>
                                            <i class="">File Permohonan</i>
                                          </li>`;
                      $("#harus-upload").append(ell);
                    }
                  }
                  break;
                case "doc_izin_lingkungan":
                  $("#nama-file-izin-lingkungan").html(
                    data.file[f]["filename"]
                  );
                  $("#nama-file-izin-lingkungan").attr(
                    "onclick",
                    "downloadatuh('" +
                      "public/" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );
                  $("#hapus-izin-lingkungan").attr(
                    "onclick",
                    "actionfile('delete','" +
                      data.file[f]["id"] +
                      "','" +
                      data.type +
                      "','" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );

                  $("#view-file-izin-lingkungan").css("display", "block");
                  $("#form-izin-lingkungan-reupload").css("display", "none");

                  if (oknya == 1) {
                    $("#hapus-izin-lingkungan").css("display", "none");
                  } else {
                    $("#hapus-izin-lingkungan").show();
                    if (oknya == 2) {
                      var ell = ` <li>
                                            <i class="">File Izin Lingkungan</i>
                                          </li>`;
                      $("#harus-upload").append(ell);
                    }
                  }
                  break;
                case "doc_nib":
                  $("#nama-file-nib").html(data.file[f]["filename"]);
                  $("#nama-file-nib").attr(
                    "onclick",
                    "downloadatuh('" +
                      "public/" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );
                  $("#hapus-nib").attr(
                    "onclick",
                    "actionfile('delete','" +
                      data.file[f]["id"] +
                      "','" +
                      data.type +
                      "','" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );

                  $("#view-file-nib").css("display", "block");
                  $("#form-nib-reupload").css("display", "none");

                  if (oknya == 1) {
                    $("#hapus-nib").css("display", "none");
                  } else {
                    $("#hapus-nib").show();
                    if (oknya == 2) {
                      var ell = ` <li>
                                            <i class="">File NIB</i>
                                          </li>`;
                      $("#harus-upload").append(ell);
                    }
                  }

                  break;
                case "doc_penapisan_mandiri":
                  $("#nama-file-penapisan-mandiri").html(
                    data.file[f]["filename"]
                  );
                  $("#nama-file-penapisan_mandiri").attr(
                    "onclick",
                    "downloadatuh('" +
                      "public/" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );
                  $("#hapus-penapisan-mandiri").attr(
                    "onclick",
                    "actionfile('delete','" +
                      data.file[f]["id"] +
                      "','" +
                      data.type +
                      "','" +
                      data.file[f]["path"] +
                      "/" +
                      data.file[f]["filename"] +
                      "')"
                  );

                  $("#view-file-penapisan-mandiri").css("display", "block");
                  $("#form-penapisan-mandiri-reupload").css("display", "none");

                  if (oknya == 1) {
                    $("#hapus-penapisan-mandiri").css("display", "none");
                  } else {
                    $("#hapus-penapisan-mandiri").show();
                    if (oknya == 2) {
                      var ell = ` <li><i class="">File Hasil Penapisan Mandiri</i></li>`;
                      $("#harus-upload").append(ell);
                    }
                  }
                  break;
                default:
                  break;
              }
            }
          }
      }
    });
  }
  
  $("#deletedataini").on("click", function () {
    action(
      "delete",
      $("#idpermohonan").val(),
      $("#initype").val(),
      "",
      "data_permohonan"
    );
  });

  $("#submit_doc_lapangan").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID-lapangan").val());
    formData.append("param", "param_file_lapangan");
    formData.append("type", "1");
    formData.append("file[doc_izin_usaha]", $("#doc_lapangan")[0].files[0]);
    formData.append("keterangan", $("#keterangan_lapangan").val());

    uploadlapangan(formData);
  });

  $("[name=form-input]").on("change", function () {
    let vl = [];
    for (let index = 0; index < $("[name=form-input]").length; index++) {
      let valn = $("[name=form-input]")[index].value;
      if (valn) {
        vl.push(valn);
      }
    }
    if(!$('#ideditpermohonan').val()){
      if (vl.length == 3) {
        var f_mohon = document.getElementById("doc_permohonan").files.length
        if(f_mohon){
          $("#mohon_save").prop("disabled", false);
        }else{
          // $("#mohon_save").prop("disabled", true);
        }
      } else {
        // $("#mohon_save").prop("disabled", true);
      }
    }else{
      $("#mohon_save").prop("disabled", false);
    }
  });

  $("#kategori").on("change", function () {
    if (this.value > 0) {
      $("#jenis").attr("disabled", false);

      if (this.value == 2) {
        $(`#jenis`).val(0);
        $(`#jenis option[value='2']`).attr("hidden", true);
      } else {
        $(`#jenis`).val(0);
        $(`#jenis option[value='2']`).removeAttr("hidden");
      }
    } else {
      $("#jenis").val(0);
      $("#jenis").attr("disabled", true);
    }
  });

  $("#jenis").on("change", function () {
    if (this.value > 0) {
      $("#simpanaja").attr("disabled", false);
    } else {
      $("#simpanaja").attr("disabled", true);
    }
  });
});

function getkecamatan(kota) {
  var jenis = "kecamatan";
  $.ajax({
    type: "post",
    dataType: "json",
    url: "get_data_wilayah",
    data: {
      param: kota,
      jenis: jenis
    },
    success: function (result) {
      let data = result.data;

      const select = document.getElementById('select_kecamatan');
      var kecamatan = [];
      for (let i = 0; i < data.length; i++) {
        var datas = data[i];
        kecamatan.push(datas);
      }
      const options = kecamatan;
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.text = option.kemendagri_kecamatan_nama;
        optionElement.value = option.kemendagri_kecamatan_kode;
        select.add(optionElement);
      });

      // var kecamatan_array = [];
      // for (var kec in kecamatan) {
      //   var nama_kec = kecamatan[kec]["kemendagri_kecamatan_nama"];
      //   kecamatan_array.push(nama_kec);
      // }

      // $(".prompt").select2({
      //   data: kecamatan_array,
      //   minimumInputLength: 1,
      //   width: '100%',
      //   multiple: false,
      //   placeholder: "Pilih Kecamatan",
      //   templateResult:formatState
      // });


      // function formatState(kecamatan_array) {
      //     var str = "";
      //     str += "<p style='padding: 2px;'>"+ kecamatan_array+ "</p>";
      //     var $state = $(str);
      //     return $state;
      //   }
    }
  });
}
  
function getKelurahanByKecamatan() {
  const kecamatan    = document.getElementById('select_kecamatan');
  const idkecamatan  = kecamatan.value;
  
  const kelurahan    = document.getElementById('select_kelurahan');
  while (kelurahan.firstChild) {
    kelurahan.removeChild(kelurahan.firstChild);
  }

  const jenis = "kelurahan";
  $.ajax({
    type: "post",
    dataType: "json",
    url: "get_data_wilayah",
    data: {
      param: idkecamatan,
      jenis: jenis
    },
    success: function (result) {
      let data = result.data;

      const container   = document.getElementById('div_kelurahan');
      const select      = document.getElementById('select_kelurahan');
      var kelurahan = [];
      for (let i = 0; i < data.length; i++) {
        var datas = data[i];
        kelurahan.push(datas);
      }
      const options = kelurahan;
      options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.text = option.kemendagri_kelurahan_nama;
        optionElement.value = option.kemendagri_kelurahan_kode;
        select.add(optionElement);
      });
    }
  });

}

function loadpermohonan(param) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loadpermohonan",
    data: {
      param: param,
      type: 1
    },
    success: function (result) {
      let code = result.code;
      if (code != "0") {
        var da = result.data;
        var dat = da.permohonan;
        var results = [];
        for(var d in dat){
          var da = dat[d].type;
          results.push(da);
        }
        if(da == 1){
          $("#div_kategori").show();
          $("#kategori_slo").hide();
        }
        if ($("#isRole").val() == 0) {
          let data = result.data;
          $("#idpermohonan").val(data.id);
          $("#initype").val(data.type);
          $("#inikategori").val(data.kategori);
          $("#initambah").show();
          if(typeof data.permohonan != 'undefined'){
            var expired = data.permohonan.expired_date;

            var dt = $("#permohonan-table").DataTable({
              destroy: true,
              paging: true,
              lengthChange: true,
              searching: true,
              ordering: false,
              info: true,
              autoWidth: false,
              responsive: false,
              pageLength: 10,
              aaData: data.permohonan,
              aoColumns: [
                { mDataProp: "id", width: "1%" },
                { mDataProp: "p6", width: "1%" },
                { mDataProp: "p7", width: "1%" },
                { mDataProp: "id", width: "5%" },
                { mDataProp: "expired_date", width: "2%" },
                { mDataProp: "id", width: "1%" },
                { mDataProp: "id", width: "2%" },
              ],
              order: [[0, "ASC"]],
              fixedColumns: true,
              aoColumnDefs: [
                { width: 50, targets: 0 },
                {
                  render: function (data, type, row) {
                    if(type == "display"){
                      var el = ''
                      // Menunggu Verifikasi status = 0
                      // Sudah Verifikasi status = 1
                      // Gagal Verifikasi status = 2
                      // Ditolak status = 3
                      if (row.status == 0) {
                        el +=
                          '<span class="label label-danger arrowed">Menunggu Verifikasi</span>';
                      } else if (row.status == 1) {
                        el +=
                        '<span class="label label-danger arrowed">Verifikasi</span>';
                      } else if (row.status == 2){
                        el +=
                        '<p class="text-danger">Gagal Verifikasi</p>';
                        // <span class="label label-danger arrowed">Gagal Verifikasi</span>';
                      } else{
                        el +=
                        '<span class="label label-danger arrowed">Verifikasi Ditolak</span>';
                      }
                      return el;
                    }
                    return data;
                  },
                  aTargets: [5],
                },
                {
                  render: function (data, type, row) {
                    if (type == "display") {
                      var el = ''
                      var idfile_permohonan = row.id
                      row.file.forEach(element => {
                        
                        idfile_permohonan = element.id
                        var type_permohonan = element.type
                        var namafile_permohonan = element.filename
                        var path_file = element.path
                        el += `<grp id="view-file-permohonan">
                        <button type="button" class="btn btn-sm btn-outline-secondary btn-round">
                        <i class="bx bx-file"></i>
                        <span class="bigger-110" id="nama-file-permohonan" onclick="downloadatuh('${'public/'+path_file}/${namafile_permohonan}')">${namafile_permohonan}</span>
                        </button>
                        </grp>`
                        // <button class="btn btn-danger btn-sm btn-round" onclick="actionfile('delete', ${idfile_permohonan}, ${type_permohonan}, ${path_file}/${namafile_permohonan})" type="button"><i class="bx bx-trash"></i></button>
                      });
                      el += `<div class="form-group" id="form-permohonan-reupload" style="display:${row.file.length ? 'none' : 'block'};">        
                              <div class="col-sm-11">
                                <input type="file" name="id-input-file-5" id="doc_permohonan_reupload" accept=".pdf" onchange="filepermohonan(this)" />
                                <button class="btn btn-success btn-sm btn-round" id="upload-permohonan" onclick="reupload('permohonan', ${idfile_permohonan})" type="button"><i class="bx bx-check-double"></i></button>
                              </div>
                            </div>`
                       el += ''
                       return el;
                    }
                    return data;
                  },
                  aTargets: [3],
                },
                {
                  render: function (data, type, row) {
                    if (type == "display") {
                      var file = row.file;
                      var oks = 0;
                      for (const key in file) {
                        oks = file[key]["ok"] == 1 ? oks + 1 : +0;
                      }
                      var el = '<div class="btn-group">';
                      
                      if (row.param) {
                        if (oks == 1) {
                          el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                          <i class="bx bx-file font-size-16"></i>
                          </button>`;
                        }
                      }
                      el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="detailpermohonan(${row.id})">
                              <i class="bx bx-detail font-size-16"></i>
                            </button>`;
                      // el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="editpermohonan(${row.id})">
                      //         <i class="bx bx-edit font-size-16"></i>
                      //       </button>`;
                      if (row.status == 1) {
                        el +=
                          `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                      } else if(row.status == 0){
                        el +=
                          `<button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>`;
                      }
                      el += "</div>";
                      return el;
                    }
                    return data;
                  },
                  aTargets: [6],
                },
              ],
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:eq(0)", nRow).html("#" + index);
                return index;
              },
              fnInitComplete: function () {
                var that = this;
                var td;
                var tr;
                this.$("td").click(function () {
                  td = this;
                });
                this.$("tr").click(function () {
                  tr = this;
                });
              },
            });
            
          }
          $("#hapus-permohonan").hide();
          $("#ini-form-add").hide();
          $("#ini-form-view").show();
          if (!data["param"]) {
            $("#cekunggahan").hide();
            $("#cekunggahan").css("display", "none");
            $("#ini-verifikasi").show();
          } else {
            $("#cekunggahan").show();
            $("#ini-verifikasi").hide();
            $("#harap").hide();
          }

          if (data.status == 1) {
            $("#verlapanganini").parent().parent().show();
            $("#surveykepuasan").parent().parent().show();
            $("#menu-puas").show();
            sessionStorage.setItem("survey", 1);
          } else {
            $("#verlapanganini").parent().parent().hide();
            $("#surveykepuasan").parent().parent().hide();
            $("#menu-puas").hide();
            sessionStorage.setItem("survey", 0);
          }

          $("#deletedataini").show();
          $("#view_1").val(data["nama_usaha"]).prop("disabled", true);
          $("#view_2").val(data["bidang_usaha"]).prop("disabled", true);
          $("#view_3").val(data["nib"]).prop("disabled", true);
          $("#view_4").val(data["penanggung_jawab"]).prop("disabled", true);
          $("#view_5").val(data["jabatan"]).prop("disabled", true);
          $("#view_9").val(data["no_kbli"]).prop("disabled", true);
          
          $("#editdataini").show();

          $("#ini-paramnya").val(data["param"]);
          var harap = [];
          for(var p in data["permohonan"]){
            var jenis_permohonan = data.permohonan[p];
            for(var fileee in jenis_permohonan["file"]){
              var filejenis = jenis_permohonan.file[fileee]["jenis"];
              var okee = jenis_permohonan.file[fileee]["ok"];
              switch (filejenis) {
                case "doc_permohonan":
                  $("#nama-file-permohonan").html(jenis_permohonan.file[fileee]["filename"]);
                  $("#nama-file-permohonan").attr(
                    "onclick",
                    "downloadatuh('" +
                      "public/" +
                      jenis_permohonan.file[fileee]["path"] +
                      "/" +
                      jenis_permohonan.file[fileee]["filename"] +
                      "')"
                  );
                  $("#hapus-permohonan").attr(
                    "onclick",
                    "actionfile('delete','" +
                    jenis_permohonan.file[fileee]["id"] +
                    "','" +
                    jenis_permohonan.file[fileee]["type"] +
                    "','" +
                    jenis_permohonan.file[fileee]["path"] +
                    "/" +
                    jenis_permohonan.file[fileee]["filename"] +
                    "')"
                  );
  
                  $("#view-file-permohonan").css("display", "block");
                  $("#form-permohonan-reupload").css("display", "none");

                  if (okee == 1) {
                    $("#hapus-permohonan").css("display", "none");
                  } else {
                    $("#hapus-permohonan").show();
                    if (okee == 2) {
                      var ell = ` 
                        <li>
                          <i class="">File Permohonan</i>
                        </li>`;
                      $("#harus-upload").append(ell);
                      harap.push("permohonan");
                    }
                  }
                  break;
              
                default:
                  break;
              }
            }
          }
          // for (var f in data["file"]) {
          //   var jenisnya = data.file[f]["jenis"];
          //   var oknya = data.file[f]["ok"];
          //   var datas = data.permohonan;
          //   //$('#hapus-permohonan').attr('onclick', "actionfile('delete','"+element.id+"','"+element.type+"','"+element.path+'/'+element.filename+"')");

          //   switch (jenisnya) {
          //     case "doc_permohonans":
          //       $("#nama-file-permohonan").html(data.file[f]["filename"]);
          //       $("#nama-file-permohonan").attr(
          //         "onclick",
          //         "downloadatuh('" +
          //           "public/" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );
          //       $("#hapus-permohonan").attr(
          //         "onclick",
          //         "actionfile('delete','" +
          //           data.file[f]["id"] +
          //           "','" +
          //           data.type +
          //           "','" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );

          //       $("#view-file-permohonan").css("display", "block");
          //       $("#form-permohonan-reupload").css("display", "none");

          //       if (oknya == 1) {
          //         $("#hapus-permohonan").css("display", "none");
          //       } else {
          //         $("#hapus-permohonan").show();
          //         if (oknya == 2) {
          //           var ell = ` <li>
          //                                 <i class="">File Permohonan</i>
          //                               </li>`;
          //           $("#harus-upload").append(ell);
          //           harap.push("permohonan");
          //         }
          //       }
          //       break;
          //     case "doc_izin_lingkungan":
          //       $("#nama-file-izin-lingkungan").html(
          //         data.file[f]["filename"]
          //       );
          //       $("#nama-file-izin-lingkungan").attr(
          //         "onclick",
          //         "downloadatuh('" +
          //           "public/" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );
          //       $("#hapus-izin-lingkungan").attr(
          //         "onclick",
          //         "actionfile('delete','" +
          //           data.file[f]["id"] +
          //           "','" +
          //           data.type +
          //           "','" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );

          //       $("#view-file-izin-lingkungan").css("display", "block");
          //       $("#form-izin-lingkungan-reupload").css("display", "none");

          //       if (oknya == 1) {
          //         $("#hapus-izin-lingkungan").css("display", "none");
          //       } else {
          //         $("#hapus-izin-lingkungan").show();
          //         if (oknya == 2) {
          //           var ell = ` <li>
          //                                 <i class="">File Izin Lingkungan</i>
          //                               </li>`;
          //           $("#harus-upload").append(ell);
          //           harap.push("izin");
          //         }
          //       }
          //       break;
          //     case "doc_nib":
          //       $("#nama-file-nib").html(data.file[f]["filename"]);
          //       $("#nama-file-nib").attr(
          //         "onclick",
          //         "downloadatuh('" +
          //           "public/" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );
          //       $("#hapus-nib").attr(
          //         "onclick",
          //         "actionfile('delete','" +
          //           data.file[f]["id"] +
          //           "','" +
          //           data.type +
          //           "','" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );

          //       $("#view-file-nib").css("display", "block");
          //       $("#form-nib-reupload").css("display", "none");

          //       if (oknya == 1) {
          //         $("#hapus-nib").css("display", "none");
          //       } else {
          //         $("#hapus-nib").show();
          //         if (oknya == 2) {
          //           var ell = ` <li>
          //                                 <i class="">File NIB</i>
          //                               </li>`;
          //           $("#harus-upload").append(ell);
          //           harap.push("nib");
          //         }
          //       }

          //       break;
          //     case "doc_penapisan_mandiri":
          //       $("#nama-file-penapisan-mandiri").html(
          //         data.file[f]["filename"]
          //       );
          //       $("#nama-file-penapisan_mandiri").attr(
          //         "onclick",
          //         "downloadatuh('" +
          //           "public/" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );
          //       $("#hapus-penapisan-mandiri").attr(
          //         "onclick",
          //         "actionfile('delete','" +
          //           data.file[f]["id"] +
          //           "','" +
          //           data.type +
          //           "','" +
          //           data.file[f]["path"] +
          //           "/" +
          //           data.file[f]["filename"] +
          //           "')"
          //       );

          //       $("#view-file-penapisan-mandiri").css("display", "block");
          //       $("#form-penapisan-mandiri-reupload").css("display", "none");

          //       if (oknya == 1) {
          //         $("#hapus-penapisan-mandiri").css("display", "none");
          //       } else {
          //         $("#hapus-penapisan-mandiri").show();
          //         if (oknya == 2) {
          //           var ell = ` <li><i class="">File Hasil Penapisan Mandiri</i></li>`;
          //           $("#harus-upload").append(ell);
          //           harap.push("mandiri");
          //         }
          //       }

          //       break;

          //     default:
          //       break;
          //   }
          // }

          if (harap.length == 0) {
            $("#harap").hide();
          }
        } else {
          let data = result.data;
            // Table perusahaan
            var dt = $("#all-permohonan").DataTable({
              destroy: true,
              paging: true,
              lengthChange: true,
              searching: true,
              ordering: false,
              info: true,
              autoWidth: false,
              responsive: false,
              pageLength: 10,
              aaData: data,
              aoColumns: [
                { mDataProp: "id", width: "10%" },
                { mDataProp: "nama_usaha" },
                { mDataProp: "bidang_usaha" },
                { mDataProp: "nib" },
                { mDataProp: "no_kbli" },
                { mDataProp: "penanggung_jawab" },
                { mDataProp: "jabatan" },
                { mDataProp: "id" },
              ],
              order: [[0, "ASC"]],
              fixedColumns: true,
              aoColumnDefs: [
                { width: 50, targets: 0 },
                {
                  render: function (data, type, row) {
                    if (type == "display") {
                      var file = row.file;
                      var oks = 0;
                      for (const key in file) {
                        oks = file[key]["ok"] == 1 ? oks + 1 : +0;
                      }

                      var el = '<div class="btn-group">';
                      if (row.param) {
                        if (oks == 1) {
                          el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                                  <i class="bx bx-file font-size-16"></i>
                                </button>`;
                        }
                      }
                      el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="popupvalidasi(${row.id}, '1', ${row.param}, ${row.kategori})">
                          <i class="bx bx-list-ul font-size-16"></i>
                        </button>`;
                      var permohonan = row.permohonan;
                      if (permohonan.length) {
                        el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="detailper(${row.id})">
                                <i class="bx bx-show font-size-16"></i>
                              </button>`;
                      }
                      if (row.status == 1) {
                        el +=
                          `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                      } else {
                        el +=
                          ``;
                      }
                      // <button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>
                      el += "</div>";
                      return el;
                    }
                    return data;
                  },
                  aTargets: [7],
                },
              ],
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:eq(0)", nRow).html("#" + index);
                return index;
              },
              fnInitComplete: function () {
                var that = this;
                var td;
                var tr;
                this.$("td").click(function () {
                  td = this;
                });
                this.$("tr").click(function () {
                  tr = this;
                });
              },
            });
          // $("#all-permohonan_filter.dataTables_filter").append($("#categoryFilter"));
        }
      } else {
        if ($("#isRole").val() == 0) {
          $('#data_permohonan_btn').hide();
          $("#initambah").show();
          $("#cekunggahan").css("display", "none");
          $("#cekunggahan").hide();
          $("#deletedataini").hide();
          $("#editdataini").hide();
        } else {
          var tb = $("#all-permohonan").DataTable();
          tb.clear().draw();
        }
      }
    },
  });
}

function save(formData) {
  var dialog = bootbox.dialog({
    message:
      '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false,
  });

  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "addpermohonan",
    data: formData,
    success: function (result) {
      dialog.modal("hide");
      Swal.fire({
        type: "success",
        title: "Berhasil Tambah Permohonan !",
        showConfirmButton: true,
        // showCancelButton: true,
        confirmButtonText: `Ok`,
      }).then((result) => {
        $(document).ready(function () {
          location.reload();
        });
      });
    },
  });
}

function upload(formData) {
  var dialog = bootbox.dialog({
    message:
      '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false,
  });
  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "uploadfile",
    data: formData,
    success: function (result) {
      dialog.modal("hide");
      location.reload();
    },
  });
}

function detailper(id) {
  $("#permohonan-all").hide();
  $("#detail").show();
  window.id_perusahaan = id
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loaddetailpermohonan",
    data: {
      param: id,
      type: 1
    },
    success: function (result) {
      let code = result.code;
      if ( code != "0") {
        $("#categoryFiltertext").show();
        $("#categoryFilter").show();
        let data = result.data;
        // Table detail permohonan
        var dt = $("#permohonan-detail").DataTable({
          destroy: true,
          paging: true,
          lengthChange: true,
          searching: true,
          ordering: false,
          info: true,
          autoWidth: false,
          responsive: false,
          pageLength: 10,
          aaData: data,
          aoColumns: [
            { mDataProp: "id", width: "1%" },
            { mDataProp: "p6", width: "1%" },
            { mDataProp: "p7", width: "1%" },
            { mDataProp: "expired_date", width: "2%" },
            { mDataProp: "id", width: "2%"},
            { mDataProp: "id", width: "2%" },
          ],
          order: [[0, "ASC"]],
          fixedColumns: true,
          aoColumnDefs: [
            { width: 50, targets: 0 },
            // {
            //   render: function (datas, type, row) {
            //     if (type == "display") {
            //       var el = ''
            //       var idfile_permohonan = row.id
            //       row.file.forEach(element => {
                    
            //         idfile_permohonan = element.id
            //         var type_permohonan = element.type
            //         var namafile_permohonan = element.filename
            //         var path_file = element.path
            //         el += `<grp id="view-file-permohonan">
            //                   <button type="button" class="btn btn-sm btn-outline-secondary btn-round">
            //                     <i class="bx bx-file"></i>
            //                     <span class="bigger-110" id="nama-file-permohonan" onclick="downloadatuh('${'public/'+path_file}/${namafile_permohonan}')">${namafile_permohonan}</span>
            //                   </button>
            //                   <button class="btn btn-danger btn-sm btn-round" id="hapus-permohonan" type="button" onclick="actionfile('delete', '${idfile_permohonan}', '${type_permohonan}', '${path_file}/${namafile_permohonan}')"><i class="bx bx-trash"></i></button>
            //                 </grp>
            //               `
                    
            //       });
            //       el += `<div class="form-group" id="form-permohonan-reupload" style="display:${row.file.length ? 'none' : 'block'};">        
            //                   <div class="col-sm-11">
            //                     <input type="file" name="id-input-file-5" id="doc_permohonan_reupload" accept=".pdf" onchange="filepermohonan(this)" />
            //                     <button class="btn btn-success btn-sm btn-round" id="upload-permohonan" onclick="reupload('permohonan', ${idfile_permohonan})" type="button"><i class="bx bx-check-double"></i></button>
            //                   </div>
            //                 </div>`

            //       el += ''
                  
            //       return el;
            //     }
            //     return datas;
            //   },
            //   aTargets: [4],
            // },
            // {
            //   render: function (data, type, row) {
            //     if (type == "display") {
            //       if (!row.kategori) {
            //         return "-";
            //       }

            //       let iskat = "";
            //       let kategori = [
            //         "",
            //         "Pembuangan air limbah ke badan air permukaan",
            //         "Pembuangan air limbah ke formasi tertentu",
            //         "Pemanfaatan air limbah untuk aplikasi ke tanah",
            //         "Pemanfaatan air limbah ke formasi tertentu",
            //         "Pembuangan emisi",
            //       ];

            //       return kategori[row.kategori];
            //     }
            //     return data;
            //   },
            //   aTargets: [3],
            // },
            // {
            //   render: function (data, type, row) {
            //     if (type == "display") {
            //       if (!row.param) {
            //         return "-";
            //       }
            //       let par = ["", "Kajian Teknis", "Standar Teknis"];
            //       return par[row.param];
            //     }
            //     return data;
            //   },
            //   aTargets: [4],
            // },
            {
              render: function (data, type, row) {
                if(type == "display"){
                  var el = ''
                  // Menunggu Verifikasi status = 0
                  // Sudah Verifikasi status = 1
                  // Gagal Verifikasi status = 2
                  // Ditolak status = 3
                  if (row.status == 0) {
                    el +=
                      '<span class="label label-danger arrowed">Menunggu Verifikasi</span>';
                  } else if (row.status == 1) {
                    el +=
                    '<span class="label label-danger arrowed">Verifikasi</span>';
                  } else if (row.status == 2){
                    el +=
                    '<span class="label label-danger arrowed">Gagal Verifikasi</span>';
                  } else{
                    el +=
                    '<span class="label label-danger arrowed">Verifikasi Ditolak</span>';
                  }
                  return el;
                }
                return data;
              },
              aTargets: [4],
            },
            {
              render: function (data, type, row) {
                if (type == "display") {
                  var file = row.file;
                  var oks = 0;
                  for (const key in file) {
                    oks = file[key]["ok"] == 1 ? oks + 1 : +0;
                  }
                  var el = '<div class="btn-group">';

                  if (oks == 1) {
                      el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                              <i class="bx bx-file font-size-16"></i>
                            </button>`;
                  }
                  if (moment().isSameOrAfter(moment(row.expired_date)) || row.status != 0) {
                    el += '';
                  }else{
                    el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="popupvalidasi(${row.id}, '${row.type}', ${row.param}, ${row.kategori})">
                    <i class="bx bx-list-ul font-size-16"></i>
                  </button>`;
                  }
                  if (row.status == 1) {
                    el +=
                      `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                  } else {
                    el +=
                      ``;
                  }
                  //<button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>
                  el += "</div>";
                  return el;
                }
                return data;
              },
              aTargets: [5],
            },
          ],
          fnRowCallback: function (
            nRow,
            aData,
            iDisplayIndex,
            iDisplayIndexFull
          ) {
            var index = iDisplayIndexFull + 1;
            $("td:eq(0)", nRow).html("#" + index);
            return index;
          },
          fnInitComplete: function () {
            var that = this;
            var td;
            var tr;
            this.$("td").click(function () {
              td = this;
            });
            this.$("tr").click(function () {
              tr = this;
            });
          },
        }); 

        //category filter
        var categoryIndex = 0;
        $("#permohonan-detail th").each(function (i) {
          if ($($(this)).html() == "Kategori") {
            categoryIndex = i;
            return false;
          }
        });

        $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
          var selectedItem = $("#categoryFilter").val();
          var category = data[categoryIndex];
          if (selectedItem === "" || category.includes(selectedItem)) {
            return true;
          }
          return false;
        });

        $("#categoryFilter").change(function (e) {
          dt.draw();
        });
        dt.draw(); 

      } else {
        $("#categoryFiltertext").hide();
        $("#categoryFilter").hide();
        var tb = $("#permohonan-detail").DataTable();
          tb.clear().draw();
      }
    },
  });
}



function action(mode, id, type, keterangan, param, kode, kategori) {
  if (mode == "view") {
    let parkateg = [
      "",
      "Pembuangan air limbah ke badan air permukaan",
      "Pembuangan air limbah ke formasi tertentu",
      "Pemanfaatan air limbah untuk aplikasi ke tanah",
      "Pemanfaatan air limbah ke formasi tertentu",
      "Pembuangan emisi",
    ];

    if (!kategori || kategori === undefined) {
      kategori = $("#inikategori").val();
    }
    let kateg_name = parkateg[kategori];
    $("#text-kategori").text(kateg_name);
    if (!kode) {
      kode = $("#ini-paramnya").val();
    }

    let opt = '<option value="0">Pilih Dokumen</option>';

    if (kategori == 1 && kode == 1) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Komponen Lingkungan Yang Terkena Dampa</option>
                <option value="4">BAB 4 - Prakiraan Dampa</option>
                <option value="5">BAB 5 - Rencana Pengelolaan Lingkungan</option>
                <option value="6">BAB 6 - Rencana Pemantauan Lingkungan</option>
                <option value="7">BAB 7 - Sistem Penanggulangan Keadaan Darura</option>
                <option value="8">BAB 8 - Internalisasi Biaya Lingkungan</option>
                <option value="9">BAB 9 - Periode Waktu Uji Coba</option>
                <option value="10">BAB 10 - Struktur Organisasi Dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="11">BAB 11 - Sistem Manajemen Lingkungan</option>
                `;

      $("#ini-lampiran").show();
      $("#kajian-teknis").show();
      $("#standar-teknis").hide();
      $("#modal_file").on("shown.bs.modal", function (e) { 
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").addClass("active");
        $("#standar-teknis").removeClass("active");

        $("#kajian").addClass("tab-pane active");
        $("#standar").removeClass("active");
      });
    } else if (kategori == 2 && kode == 1) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                  <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                  <option value="3">BAB 3 - Prakiraan Dampak</option>
                  <option value="4">BAB 4 - Rencana Pengelolaan Lingkungan </option>
                  <option value="5">BAB 5 - Rencana Pemantauan Lingkungan</option>
                  <option value="6">BAB 6 - Sistem Penanggulangan Keadaan Darurat</option>
                  <option value="7">BAB 7 - Internalisasi Biaya Lingkungan</option>
                  <option value="8">BAB 8 - Periode Waktu Uji Coba</option>
                  <option value="9">BAB 9 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                  <option value="10">BAB 10 - Sistem Manajemen Lingkungan</option>`;
      // <option value="11">BAB LAMPIRAN</option>

      $("#ini-lampiran").show();
      $("#kajian-teknis").show();
      $("#standar-teknis").hide();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").addClass("active");
        $("#standar-teknis").removeClass("active");

        $("#kajian").addClass("tab-pane active");
        $("#standar").removeClass("active");
      });
    } else if (kategori == 3 && kode == 1) {
      opt += `<option value="1">Bab 1 - Deskripsi Kegiatan</option>
                <option value="2">Bab 2 - Rona Lingkungan Awal</option>
                <option value="3">Bab 3 - Prakiraan Dampak</option>
                <option value="4">Bab 4 - Rencana Pengelolaan Lingkungan</option>
                <option value="5">Bab 5 - Rencana Pemantauan Lingkungan</option>
                <option value="6">Bab 6 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="7">Bab 7 - Internalisasi Biaya Lingkungan</option>
                <option value="8">Bab 8 - Periode Uji Coba</option>
                <option value="9">Bab 9 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="10">Bab 10 - Sistem Manajemen Lingkungan</option>
                `;
      // <option vavlue="9">BAB LAMPIRAN</option>

      $("#ini-lampiran").show();
      $("#kajian-teknis").show();
      $("#standar-teknis").hide();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").addClass("active");
        $("#standar-teknis").removeClass("active");

        $("#kajian").addClass("tab-pane active");
        $("#standar").removeClass("active");
      });
    } else if (kategori == 4 && kode == 1) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Baku Mutu Air Limbah</option>
                <option value="4">BAB 4 - Prakiraan Dampak</option>
                <option value="5">BAB 5 - Rencana Pengelolaan Lingkungan</option>
                <option value="6">BAB 6 - Rencana Pemantauan Lingkungan</option>
                <option value="7">BAB 7 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="8">BAB 8 - Internalisasi Biaya Lingkungan</option>
                <option value="9">BAB 9 - Periode Waktu Uji Coba</option>
                <option value="10">BAB 10 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="11">BAB 11 - Sistem Manajemen Lingkungan</option>`;
      // <option value="12">BAB LAMPIRAN</option>

      $("#ini-lampiran").show();
      $("#kajian-teknis").show();
      $("#standar-teknis").hide();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").addClass("active");
        $("#standar-teknis").removeClass("active");

        $("#kajian").addClass("tab-pane active");
        $("#standar").removeClass("active");
      });
    } else if (kategori == 5 && kode == 1) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rona Lingkungan Awal</option>
                <option value="3">BAB 3 - Desain Sarana dan Prasarana Sistem Pengendalian Emisi</option>
                <option value="4">BAB 4 - Prakiraan Dampak</option>
                <option value="5">BAB 5 - Rencana Pemantauan Lingkungan</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="8">BAB 8 - Sistem Manajemen Lingkungan</option>
                <option value="9">BAB 9 - Periode Uji Coba Instalasi Pengendali Emisi</option>
                `;
      // <option value="8">BAB LAMPIRAN</option>

      $("#ini-lampiran").show();
      $("#kajian-teknis").show();
      $("#standar-teknis").hide();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").addClass("active");
        $("#standar-teknis").removeClass("active");

        $("#kajian").addClass("tab-pane active");
        $("#standar").removeClass("active");
      });
    } else if (kategori == 1 && kode == 2) {
      opt += ` <option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah Nasional</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Struktur Organisasi Dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>`;

      $("#ini-lampiran-2").show();
      $("#kajian-teknis").hide();
      $("#standar-teknis").show();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").removeClass("active");
        $("#standar-teknis").addClass("active");

        $("#kajian").removeClass("active");
        $("#standar").addClass("tab-pane active");
      });
    } else if (kategori == 3 && kode == 2) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Struktur Organisasi dan Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>
                `;
      // <option value="9">BAB LAMPIRAN</option>

      $("#ini-lampiran-2").show();
      $("#kajian-teknis").hide();
      $("#standar-teknis").show();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").removeClass("active");
        $("#standar-teknis").addClass("active");

        $("#kajian").removeClass("active");
        $("#standar").addClass("tab-pane active");
      });
    } else if (kategori == 4 && kode == 2) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Baku Mutu Air Limbah</option>
                <option value="3">BAB 3 - Rencana Pengelolaan Lingkungan</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan</option>
                <option value="5">BAB 5 - Sistem Penanggulangan Keadaan Darurat</option>
                <option value="6">BAB 6 - Internalisasi Biaya Lingkungan</option>
                <option value="7">BAB 7 - Periode Waktu Uji Coba</option>
                <option value="8">BAB 8 - Standar Kompetensi Sumber Daya Manusia</option>
                <option value="9">BAB 9 - Sistem Manajemen Lingkungan</option>
                `;
      // <option value="9">BAB LAMPIRAN</option>

      $("#ini-lampiran-2").show();
      $("#kajian-teknis").hide();
      $("#standar-teknis").show();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").removeClass("active");
        $("#standar-teknis").addClass("active");

        $("#kajian").removeClass("active");
        $("#standar").addClass("tab-pane active");
      });
    } else if (kategori == 5 && kode == 2) {
      opt += `<option value="1">BAB 1 - Deskripsi Kegiatan</option>
                <option value="2">BAB 2 - Rujukan Baku Mutu Emisi</option>
                <option value="3">BAB 3 - Desain Sarana dan Prasarana Sistem Pengendalian Emisi</option>
                <option value="4">BAB 4 - Rencana Pemantauan Lingkungan </option>
                <option value="5">BAB 5 - Internalisasi Biaya Lingkungan</option>
                <option value="6">BAB 6 - Standar Kompetensi Sumber Daya Manusia </option>
                <option value="7">BAB 7 - Sistem Manajemen Lingkungan</option>
                <option value="8">BAB 8 - Periode Uji Coba Instalasi Pengendali Emisi</option>
                `;
      // <option value="7">BAB LAMPIRAN</option>

      $("#ini-lampiran-2").show();
      $("#kajian-teknis").hide();
      $("#standar-teknis").show();
      $("#modal_file").on("shown.bs.modal", function (e) {
        $("#edit_group_kajian").attr("hidden", true);
        $("#kajian-teknis").removeClass("active");
        $("#standar-teknis").addClass("active");

        $("#kajian").removeClass("active");
        $("#standar").addClass("tab-pane active");
      });
    }

    $("#bab_kajian").html(opt);
    $("#bab_kajian").trigger("chosen:updated");
    $("#bab_standar").html(opt);
    $("#bab_standar").trigger("chosen:updated");

    // switch (kode) {
    //   case '1':
    //       $('#kajian-teknis').show();
    //       $('#standar-teknis').hide();
    //       $( "#modal_file" ).on('shown.bs.modal', function (e) {
    //         $("#kajian-teknis").addClass('active');
    //         $("#standar-teknis").removeClass('active');

    //         $('#kajian').addClass('tab-pane active');
    //         $('#standar').addClass('tab-pane');
    //       });
    //     break;
    //   case '2':
    //       $('#kajian-teknis').hide();
    //       $('#standar-teknis').show();
    //       $( "#modal_file" ).on('shown.bs.modal', function (e) {
    //         $("#kajian-teknis").removeClass('active');
    //         $("#standar-teknis").addClass('active');

    //         $('#kajian').removeClass('active');
    //         $('#standar').addClass('active');

    //       });
    //     break;
    // }

    $("#modal_file").modal("show");
    $("#ini-ID").val(id);
    if (kode == "1") {
      $.ajax({
        type: "post",
        dataType: "json",
        url: "loadfile",
        data: {
          id: id,
          type: 1,
          jenis: "doc_kajian",
          kategori: kategori,
        },
        success: function (result) {
          loadstatus(id, 1, "doc_kajian", kategori);

          let data = result.data;
          let code = result.code;
          if (code != "0") {
            var dt = $("#data-file-kajian").DataTable({
              destroy: true,
              paging: true,
              lengthChange: true,
              searching: true,
              ordering: true,
              info: true,
              autoWidth: false,
              responsive: false,
              pageLength: 10,
              aaData: result.data,
              aoColumns: [
                { mDataProp: "id" },
                { mDataProp: "bab" },
                { mDataProp: "filename" },
                // { 'mDataProp': 'size'},
                { mDataProp: "status" },
                { mDataProp: "created_date" },
                { mDataProp: "updated_date" },
                { mDataProp: "keterangan" },
                { mDataProp: "id" },
              ],
              order: [[0, "ASC"]],
              fixedColumns: true,
              aoColumnDefs: [
                { width: 50, targets: 0 },
                // {
                //     mRender: function ( data, type, row ) {

                //       var el = bytesToSize(parseInt(data));

                //         return el;
                //     },
                //     aTargets: [3]
                // },
                {
                  mRender: function (data, type, row) {
                    if (type == "display") {
                      let des = [];
                      if (row.jenis != "doc_lampiran") {
                        $("#bab_kajian option").each(function () {
                          des.push($(this).text());
                        });
                      } else {
                        let p = "";
                        if (row.param == 2) {
                          p = "-2";
                        }

                        $(`#bab_lampiran${p} option[value="${row.bab}"]`).prop(
                          "disabled",
                          true
                        );
                        $("#bab_lampiran").trigger("chosen:updated");

                        des = [
                          "-",
                          "LAMPIRAN I",
                          "LAMPIRAN II",
                          "LAMPIRAN III",
                        ];
                      }
                      return des[row.bab];
                    }

                    return data;
                  },
                  aTargets: [1],
                },
                {
                  mRender: function (data, type, row) {
                    if ($("#role").val() == "10" || $("#role").val() == "100") {
                      let rev = "";
                      let done = "";
                      if (data == "1") {
                        rev = "selected";
                      }

                      if (data == "0") {
                        done = "selected";
                      }

                      var el =
                        `<select class="form-control" id="status_1_` +
                        row.id +
                        `" >
                          <option value=""> - </option>
                          <option ` +
                        rev +
                        ` value="1"> Revisi </option>
                          <option ` +
                        done +
                        ` value="0"> Selesai </option>
                        </select>`;
                    } else {
                      if (data == "1") {
                        var el =
                          '<span class="label label-danger arrowed">Revisi</span>';
                      } else if (data == "0") {
                        var el =
                          '<span class="label label-primary arrowed">Selesai</span>';
                      } else {
                        var el = "-";
                      }
                    }

                    if (row.jenis == "doc_lampiran") {
                      return "-";
                    }
                    return el;
                  },
                  aTargets: [3],
                },
                {
                  mRender: function (data, type, row) {
                    var el =
                      row.updated_date == row.created_date
                        ? "-"
                        : row.updated_date;
                    return el;
                  },
                  aTargets: [5],
                },
                {
                  mRender: function (data, type, row) {
                    if ($("#role").val() == "10" || $("#role").val() == "100") {
                      if (data == null) {
                        data = "";
                      }
                      var el =
                        `<textarea style="width:150px;" id="keterangan_1_` +
                        row.id +
                        `">` +
                        data +
                        `</textarea>`;
                    } else {
                      var el = data;
                    }

                    if (row.jenis == "doc_lampiran") {
                      return "-";
                    }

                    return el;
                  },
                  aTargets: [6],
                },
                {
                  mRender: function (data, type, row) {
                    var el =
                      `<div class="btn-group">
                        <a class="btn btn-xs btn-warning" target="_blank" href="public/` +row.path +"/" +row.filename +`">
                          <i class="bx bxs-download font-size-16"></i>
                        </a>`;

                    if ($("#role").val() == 0) {
                      if (row.status == "1") {
                        el +=
                          `<button class="btn btn-xs btn-info" onclick="revisikajian('` +
                            row.id +
                            `','` +
                            row.type +
                            `','` +
                            row.jenis +
                            `','` +
                            row.path +
                            "/" +
                            row.filename +
                            `','` +
                            row.bab +
                            `', '${row.kategori}')">
                            <i class="bx bx-edit font-size-16"></i>
                          </button>`;

                        el +=
                          `<button class="btn btn-xs btn-danger" onclick="actionfile('delete','` +
                            row.id +
                            `','` +
                            row.type +
                            `', '` +
                            row.path +
                            "/" +
                            row.filename +
                            `')">
                            <i class="bx bx-trash font-size-16"></i>
                          </button>`;
                      }
                    } else {
                      if (row.jenis == "doc_lampiran") {
                        el += "";
                      } else {
                        el +=
                          `<button class="btn btn-xs btn-success" onclick="action('update','` +
                            row.id +
                            `','` +
                            row.type +
                            `','','1')">
                            <i class="bx bx-check-double"></i>
                          </button>`;
                      }
                    }
                    el += `<a href="#" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bx bx-history font-size-16"></i>
                          </a> 
                          <div class="dropdown-menu" style="">
                            <div class="card">
                              <div class="card-body">
                                <div class="">
                                  <ul class="verti-timeline list-unstyled">
                                    <li class="event-list">
                                      <div class="event-timeline-dot">
                                        <i class="bx bx-right-arrow-circle"></i>
                                      </div>
                                      <div class="d-flex">
                                        <div class="flex-grow-1">
                                          <div>
                                            <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">Pengajuan</a></h5>
                                            <span class="text-primary">${row.created_date}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>`
                                  for (let index = 0; index < row.history.length; index++) {
                                    el +=  `
                                    <li class="event-list">
                                      <div class="event-timeline-dot">
                                          <i class="bx bx-right-arrow-circle"></i>
                                      </div>
                                      <div class="d-flex">
                                          <div class="flex-grow-1">
                                              <div>
                                                  <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">
                                                  ${row.history[index]["status"] == 1 ? '<span class="label label-warning label-sm">Revisi</span>' : '<span class="label label-success label-sm">Selesai</span>' }</a></h5>
                                                  <span class="text-primary">${row.history[index]["createdate"]}</span>
                                              </div>
                                          </div>
                                      </div>
                                    </li>`
                                  }
                                  el +=  `</ul>
                              </div>
                          </div>
                      </div>
                  </div>`
                    // el += `<button data-toggle="dropdown" class="btn btn-xs btn-secondary dropdown-toggle" aria-expanded="false">
                    //           <i class="bx bx-history font-size-16"></i>
                    //         </button>
                    //         <ul class="dropdown-menu dropdown-info dropdown-menu-right" style="width:25rem">
                    //         <div class="timeline-container">
                    //           <div class="timeline-items">
                    //             <div class="timeline-item clearfix">
                    //               <div class="timeline-info">
                    //                 <span class="label label-primary label-sm">Create</span>
                    //               </div>
                    //               <div class="widget-box transparent">
                    //                 <div class="widget-body">
                    //                   <div class="widget-main">
                    //                     <i class="bx bx-history font-size-16"></i>
                    //                     ${row.created_date}
                    //                   </div>
                    //                 </div>
                    //               </div>
                    //             </div>`;
                    // for (let index = 0; index < row.history.length; index++) {
                    //   el += `<div class="timeline-item clearfix">
                    //           <div class="timeline-info">
                    //             ${
                    //               row.history[index]["status"] == 1
                    //                 ? '<span class="label label-warning label-sm">Revisi</span>'
                    //                 : '<span class="label label-success label-sm">Selesai</span>'
                    //             }
                    //           </div>
                    //           <div class="widget-box transparent">
                    //             <div class="widget-body">
                    //               <div class="widget-main">
                    //                   <i class="bx bx-history font-size-16"></i>
                    //                   ${
                    //                     row.history[index][
                    //                       "createdate"
                    //                     ]
                    //                   }
                    //               </div>
                    //             </div>
                    //           </div>
                    //         </div>`;
                    // }
                    // el += `</div>
                    //     </div>
                    //   </ul>
                    // </div>`;

                    return el;
                  },
                  aTargets: [7],
                },
              ],
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:eq(0)", nRow).html("#" + index);
                return index;
              },
              fnDrawCallback: function () {
                var table = $("#data-file-kajian").DataTable();
                var trr = $("#data-file-kajian tbody tr");
                for (let index = 0; index < trr.length; index++) {
                  $(trr[index]).find("td:eq(1)").css("white-space", "normal");
                  $(trr[index]).find("td:eq(2)").css("white-space", "normal");
                }
              },
              fnInitComplete: function () {
                var that = this;
                var td;
                var tr;
                this.$("td").click(function () {
                  td = this;
                });
                this.$("tr").click(function () {
                  tr = this;
                });
              },
            });

            dt.column(4).visible(false);
            dt.column(5).visible(false);
          } else {
            var table = $("#data-file-kajian").DataTable();
            table.clear().draw();
          }
          // $('#create_date').html(data[0]['created_date']);
          // for (let index = 0; index < data.length; index++) {
          //   if(data[index]['jenis'] == 'doc_kajian'){
          //       $('#file_name_kajian').html(data[index]['filename']);
          //       $('#file_name_kajian').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
          //       $('#file_size_kajian').html(bytesToSize(parseInt(data[index]['size'])));
          //   }else if(data[index]['jenis'] == 'doc_standar'){
          //     $('#file_name_standar').html(data[index]['filename']);
          //     $('#file_name_standar').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
          //     $('#file_size_standar').html(bytesToSize(parseInt(data[index]['size'])));
          //   }

          // }
        },
      });
    } else if (kode == "2") {
      $.ajax({
        type: "post",
        dataType: "json",
        url: "loadfile",
        data: {
          id: id,
          type: 1,
          jenis: "doc_standar",
          kategori: kategori,
        },
        success: function (result) {
          loadstatus(id, 1, "doc_standar", kategori);

          let data = result.data;
          let code = result.code;

          if (code != "0") {
            var dt = $("#data-file-standar").DataTable({
              destroy: true,
              paging: true,
              lengthChange: true,
              searching: true,
              ordering: true,
              info: true,
              autoWidth: false,
              responsive: false,
              pageLength: 10,
              aaData: result.data,
              aoColumns: [
                { mDataProp: "id", width: "10%" },
                { mDataProp: "bab" },
                { mDataProp: "filename" },
                // { 'mDataProp': 'size'},
                { mDataProp: "status" },
                { mDataProp: "created_date" },
                // { 'mDataProp': 'updated_date'},
                { mDataProp: "keterangan" },
                { mDataProp: "id" },
              ],
              order: [[0, "ASC"]],
              fixedColumns: true,
              aoColumnDefs: [
                { width: 50, targets: 0 },
                // {
                //     mRender: function ( data, type, row ) {

                //       var el = bytesToSize(parseInt(data));

                //         return el;
                //     },
                //     aTargets: [3]
                // },
                {
                  mRender: function (data, type, row) {
                    if (type == "display") {
                      let des = [];
                      if (row.jenis != "doc_lampiran") {
                        $("#bab_kajian option").each(function () {
                          des.push($(this).text());
                        });
                      } else {
                        let p = "";
                        if (row.param == 2) {
                          p = "-2";
                        }

                        $(`#bab_lampiran${p} option[value="${row.bab}"]`).prop(
                          "disabled",
                          true
                        );
                        $(`#bab_lampiran${p}`).trigger("chosen:updated");

                        des = [
                          "-",
                          "LAMPIRAN I",
                          "LAMPIRAN II",
                          "LAMPIRAN III",
                        ];
                      }
                      return des[row.bab];
                    }

                    return data;
                  },
                  aTargets: [1],
                },
                {
                  mRender: function (data, type, row) {
                    if ($("#role").val() == "10" || $("#role").val() == "100") {
                      let rev = "";
                      let done = "";
                      if (data == "1") {
                        rev = "selected";
                      }

                      if (data == "0") {
                        done = "selected";
                      }

                      var el =
                        `<select class="form-control" id="status_2_` +
                        row.id +
                        `" >
                                  <option value=""> - </option>
                                  <option ` +
                        rev +
                        ` value="1"> Revisi </option>
                                  <option ` +
                        done +
                        ` value="0"> Selesai </option>
                                </select>`;
                    } else {
                      if (data == "1") {
                        var el =
                          '<span class="label label-danger arrowed">Revisi</span>';
                      } else if (data == "0") {
                        var el =
                          '<span class="label label-primary arrowed">Selesai</span>';
                      } else {
                        var el = "-";
                      }
                    }

                    return el;
                  },
                  aTargets: [3],
                },
                {
                  mRender: function (data, type, row) {
                    let des = [
                      "Pilih Dokumen",
                      "DESKRIPSI KEGIATAN",
                      "BAKU MUTU AIR LIMBAH NASIONAL",
                      "RENCANA PENGELOLAAN LINGKUNGAN",
                      "RENCANA PEMANTAUAN LINGKUNGAN",
                      "SISTEM PENANGGULANGAN KEADAAAN DARURAT",
                      "INTERNALISASI BIAYA LINGKUNGAN",
                      "PERIODE WAKTU UJI COBA",
                      "STRUKTUR ORGANISASI DAN STANDAR KOMPETENSI SUMBER DAYA MANUSIA",
                      "SISTEM MANAJEMEN LINGKUNGAN",
                    ];

                    return des[data];
                  },
                  aTargets: [1],
                },
                //   {
                //     mRender: function ( data, type, row ) {
                //           var el = row.updated_date == row.created_date ? '-' : row.updated_date;
                //         return el;
                //     },
                //     aTargets: [ 5 ]
                // },
                {
                  mRender: function (data, type, row) {
                    if ($("#role").val() == "10" || $("#role").val() == "100") {
                      if (data == null) {
                        data = "";
                      }
                      var el =
                        `<textarea style="width:150px;" id="keterangan_2_` +
                        row.id +
                        `">` +
                        data +
                        `</textarea>`;
                    } else {
                      var el = data;
                    }

                    return el;
                  },
                  aTargets: [5],
                },
                {
                  mRender: function (data, type, row) {
                    var el =
                      `<div class="btn-group">
                        <a class="btn btn-sm btn-warning" target="_blank" href="public/${row.path}/${row.filename}">
                            <i class="bx bx-download font-size-16"></i>
                        </a>`;

                    if ($("#role").val() == 0) {
                      if (row.status == "1") {
                        el += `<button class="btn btn-sm btn-info" onclick="revisistandar('${row.id}','${row.type}','${row.jenis}','${row.path}/${row.filename}','${row.bab}','${row.kategori}')">
                                  <i class="bx bx-edit font-size-16"></i>
                                </button>`;

                        el += `<button class="btn btn-sm btn-danger" onclick="actionfile('delete','${row.id}','${row.type}','${row.path}/${row.filename}')">
                                  <i class="bx bx-trash font-size-16"></i>
                                </button>`;
                      }
                    } else {
                      el += `<button class="btn btn-sm btn-success" onclick="action('update','${row.id}','${row.type}','','2')">
                                <i class="bx bx-check-square font-size-16"></i>
                              </button>`;
                    }

                    el += `<a href="#" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="bx bx-history font-size-16"></i>
                          </a>
                          <div class="dropdown-menu" style="">
                            <div class="card">
                              <div class="card-body">
                                <div class="">
                                  <ul class="verti-timeline list-unstyled">
                                    <li class="event-list">
                                      <div class="event-timeline-dot">
                                        <i class="bx bx-right-arrow-circle"></i>
                                      </div>
                                      <div class="d-flex">
                                        <div class="flex-grow-1">
                                          <div>
                                            <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">Pengajuan</a></h5>
                                            <span class="text-primary">${row.created_date}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </li>`
                                  for (let index = 0; index < row.history.length; index++) {
                                    el +=  `
                                    <li class="event-list">
                                      <div class="event-timeline-dot">
                                          <i class="bx bx-right-arrow-circle"></i>
                                      </div>
                                      <div class="d-flex">
                                          <div class="flex-grow-1">
                                              <div>
                                                  <h5 class="font-size-15"><a href="javascript: void(0);" class="text-dark">
                                                  ${row.history[index]["status"] == 1 ? '<span class="label label-warning label-sm">Revisi</span>' : '<span class="label label-success label-sm">Selesai</span>' }</a></h5>
                                                  <span class="text-primary">${row.history[index]["createdate"]}</span>
                                              </div>
                                          </div>
                                      </div>
                                    </li>`
                                  }
                                  el +=  `</ul>
                              </div>
                          </div>
                        </div>
                      </div>`
                    return el;
                  },
                  aTargets: [6],
                },
              ],
              fnRowCallback: function (
                nRow,
                aData,
                iDisplayIndex,
                iDisplayIndexFull
              ) {
                var index = iDisplayIndexFull + 1;
                $("td:eq(0)", nRow).html("#" + index);
                return index;
              },
              fnDrawCallback: function () {
                var table = $("#data-file-standar").DataTable();
                var trr = $("#data-file-standar tbody tr");
                for (let index = 0; index < trr.length; index++) {
                  $(trr[index]).find("td:eq(1)").css("white-space", "normal");
                  $(trr[index]).find("td:eq(2)").css("white-space", "normal");
                }
              },
              fnInitComplete: function () {
                var that = this;
                var td;
                var tr;
                this.$("td").click(function () {
                  td = this;
                });
                this.$("tr").click(function () {
                  tr = this;
                });
              },
            });
          } else {
            var table = $("#data-file-standar").DataTable();
            table.clear().draw();
          }
          // $('#create_date').html(data[0]['created_date']);
          // for (let index = 0; index < data.length; index++) {
          //   if(data[index]['jenis'] == 'doc_kajian'){
          //       $('#file_name_kajian').html(data[index]['filename']);
          //       $('#file_name_kajian').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
          //       $('#file_size_kajian').html(bytesToSize(parseInt(data[index]['size'])));
          //   }else if(data[index]['jenis'] == 'doc_standar'){
          //     $('#file_name_standar').html(data[index]['filename']);
          //     $('#file_name_standar').attr('href', 'public'+ '/'+ data[index]['path']+'/'+data[index]['filename']);
          //     $('#file_size_standar').html(bytesToSize(parseInt(data[index]['size'])));
          //   }

          // }
        },
      });
    } else {
      let kat = [
        "",
        "Pembuangan air limbah ke badan air permukaan",
        "Pembuangan air limbah ke formasi tertentu",
        "Pemanfaatan air limbah untuk aplikasi ke tanah",
        "Pemanfaatan air limbah ke formasi tertentu",
        "Pembuangan emisi",
      ];

      $("#dokumen-unggahan").html(
        `<i class="ace-icon fa fa-file green "></i>&nbsp;Persyaratan Permohonan ${kat[kategori]}`
      );
    }
  } else if (mode == "update") {
    let stat = $("#status_" + param + "_" + id).val();
    let keterangan = $("#keterangan_" + param + "_" + id).val();

    $.ajax({
      type: "post",
      dataType: "json",
      url: "updatestatus",
      data: {
        table: "param_file",
        id: id,
        type: type,
        stat: stat,
        keterangan: keterangan,
      },
      success: function (result) {
        let data = result.data;
        // location.reload();
        // $('#back-all-permohonan').click()
        detailper(window.id_perusahaan)
      },
    });
  } else if (mode == "delete") {
    bootbox.confirm({
      message: "Anda Yakin <b>Hapus</b> data ini?",
      buttons: {
        confirm: {
          label: '<i class="bx bx-check"></i> Ya',
          className: "btn-success btn-sm",
        },
        cancel: {
          label: '<i class="bx bx-x"></i> Tidak',
          className: "btn-danger btn-sm",
        },
      },
      callback: function (result) {
        if (result) {
          $.ajax({
            type: "post",
            dataType: "json",
            url: "deletedata",
            data: {
              param: param,
              id: id,
              type: type,
            },
            success: function (result) {
              location.reload();
            },
          });
        }
      },
    });
  }
}

function loadstatus(id, param, jenis, kategori) {
  switch (jenis) {
    case "doc_kajian":
      param = "1";
      break;
    case "doc_standar":
      param = "2";
      break;
  }
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loadstatus",
    data: {
      id: id,
      type: 1,
      jenis: jenis,
      kategori: kategori,
    },
    success: function (result) {
      let data = result.data;
      let code = result.code;

      if (code == "1") {
        if (jenis == "doc_kajian") {
          for (let i = 0; i < data.length; i++) {
            $('#bab_kajian option[value="' + data[i]["bab"] + '"]').prop(
              "disabled",
              true
            );
            $("#bab_kajian").trigger("chosen:updated");
          }
        } else if (jenis == "doc_standar") {
          for (let i = 0; i < data.length; i++) {
            $('#bab_standar option[value="' + data[i]["bab "] + '"]').prop(
              "disabled",
              true
            );
            $("#bab_standar").trigger("chosen:updated");
          }
        } else if (jenis == "doc_lampiran") {
          for (let i = 0; i < data.length; i++) {
            let p = "";
            if (data[i]["param"] == 2) {
              p = "-2";
            }
            $(`#bab_lampiran${p} option[value="${data[i]["bab"]}"]`).prop(
              "disabled",
              true
            );
            $(`#bab_lampiran${p}`).trigger("chosen:updated");
          }
        }
      }

      detailper(window.window.id_perusahaan)
    },
  });
}

function revisikajian(id, type, jenis, path, bab, kategori) {
  $("#edit_group_kajian").removeAttr("hidden");
  $("#bab_edit_kajian").val(bab);
  $("#id_edit_kajian").val(id);
  $("#path_edit_kajian").val(path);
  $("#type_edit_kajian").val(type);
  $("#kategori_edit_standar").val(kategori);
}

function revisistandar(id, type, jenis, path, bab, kategori) {
  $("#edit_group_standar").removeAttr("hidden");
  $("#bab_edit_standar").val(bab);
  $("#id_edit_standar").val(id);
  $("#path_edit_standar").val(path);
  $("#type_edit_standar").val(type);
  $("#kategori_edit_standar").val(kategori);
}

$("#submit_edit_kajian").on("click", function () {
  var formData = new FormData();
  formData.append("id", $("#id_edit_kajian").val());
  formData.append("path", $("#path_edit_kajian").val());
  formData.append("type", $("#type_edit_kajian").val());
  formData.append("kategori", $("#kategori_edit_kajian").val());
  formData.append("file[]", $("#edit_file_kajian")[0].files[0]);

  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "editfile",
    data: formData,
    success: function (result) {
      location.reload();
    },
  });
});

$("#submit_edit_standar").on("click", function () {
  var formData = new FormData();
  formData.append("id", $("#id_edit_standar").val());
  formData.append("path", $("#path_edit_standar").val());
  formData.append("type", $("#type_edit_standar").val());
  formData.append("kategori", $("#type_edit_standar").val());
  formData.append("file[]", $("#edit_file_standar")[0].files[0]);

  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "editfile",
    data: formData,
    success: function (result) {
      location.reload();
    },
  });
});

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

function actionfile(mode, id, type, path) {
  bootbox.confirm({
    message: "Anda Yakin <b>Hapus</b> data ini?",
    buttons: {
      confirm: {
        label: '<i class="bx bx-check"></i> Ya',
        className: "btn-success btn-xs",
      },
      cancel: {
        label: '<i class="bx bx-x"></i> Tidak',
        className: "btn-danger btn-xs",
      },
    },
    callback: function (result) {
      if (result) {
        $.ajax({
          type: "post",
          dataType: "json",
          url: "deletedataungahan",
          data: {
            param: "param_file",
            id: id,
            type: type,
            path: path,
          },
          success: function (result) {
            location.reload();
            // loadpermohonan("1");
          },
        });
      }
    },
  });
}

function actionfilelapang(mode, id, type, path) {
  bootbox.confirm({
    message: "Anda Yakin <b>Hapus</b> data ini?",
    buttons: {
      confirm: {
        label: '<i class="bx bx-check"></i> Ya',
        className: "btn-success btn-xs",
      },
      cancel: {
        label: '<i class="bx bx-x"></i> Tidak',
        className: "btn-danger btn-xs",
      },
    },
    callback: function (result) {
      if (result) {
        $.ajax({
          type: "post",
          dataType: "json",
          url: "deletedataungahan",
          data: {
            param: "param_file_lapangan",
            id: id,
            type: type,
            path: path,
          },
          success: function (result) {
            location.reload();
          },
        });
      }
    },
  });
}

function downloadatuh(path) {
  window.open(path);
}

function validasi(id, param) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "updatepermohonanparam",
    data: {
      id: id,
      param: param,
    },
    success: function (result) {
      location.reload();
    },
  });
}

function actionlapangan(mode, id, type, keterangan, param) {
  if (mode == "view") {
    $("#modal_file_lapangan").modal("show");
    $("#keterangan_lapangan").val("");
    $("#doc_lapangan").val("");
    $(".remove").trigger("click");
    loadstatus(id, 1);
    $.ajax({
      type: "post",
      dataType: "json",
      url: "loadfilelapangan",
      data: {
        id: id,
        type: type,
      },
      success: function (result) {
        let data = result.data;
        let code = result.code;

        $("#ini-ID-lapangan").val(id);
        if (code != "0") {
          var dt = $("#data-file-doc-lapangan").DataTable({
            destroy: true,
            paging: true,
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: false,
            responsive: false,
            pageLength: 10,
            aaData: result.data,
            aoColumns: [
              { mDataProp: "id", width: "10%" },
              { mDataProp: "jenis" },
              { mDataProp: "filename" },
              { mDataProp: "created_date" },
              { mDataProp: "id" },
            ],
            order: [[0, "ASC"]],
            fixedColumns: true,
            aoColumnDefs: [
              { width: 50, targets: 0 },
              // {
              //     mRender: function ( data, type, row ) {

              //       var el = bytesToSize(parseInt(data));

              //         return el;
              //     },
              //     aTargets: [2]
              // },
              {
                mRender: function (data, type, row) {
                  var el =
                    `<div class="btn-group"><a class="btn btn-xs btn-warning" target="_blank" href="public/` +
                    row.path +
                    "/" +
                    row.filename +
                    `">
                            <i class="ace-icon fa fa-download bigger-120"></i>
                          </a></div>`;

                  if ($("#role").val() == "1" || $("#role").val() == "2") {
                    if (row.status == "1") {
                      el +=
                        `<div class="btn-group"><button class="btn btn-xs btn-info" onclick="revisi('` +
                        row.id +
                        `','` +
                        row.type +
                        `','` +
                        row.jenis +
                        `','` +
                        row.path +
                        "/" +
                        row.filename +
                        `','` +
                        row.jenis +
                        `')">
                                  <i class="ace-icon fa fa-edit bigger-120"></i>
                                </button></div>`;

                      el +=
                        `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfile('delete','` +
                        row.id +
                        `','` +
                        row.type +
                        `', '` +
                        row.path +
                        "/" +
                        row.filename +
                        `')">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          </button></div>`;
                    }
                  } else {
                    // el += `<button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`')">
                    //           <i class="ace-icon bx bx-check-square-o bigger-120"></i>
                    //         </button>`;

                    el +=
                      `<div class="btn-group"><button class="btn btn-xs btn-danger" onclick="actionfilelapang('delete','` +
                      row.id +
                      `','` +
                      row.type +
                      `', '` +
                      row.path +
                      "/" +
                      row.filename +
                      `')">
                            <i class="ace-icon fa fa-trash-o bigger-120"></i>
                          </button></div>`;
                  }

                  return el;
                },
                aTargets: [4],
              },
            ],
            fnRowCallback: function (
              nRow,
              aData,
              iDisplayIndex,
              iDisplayIndexFull
            ) {
              var index = iDisplayIndexFull + 1;
              $("td:eq(0)", nRow).html("#" + index);
              return index;
            },
            fnInitComplete: function () {
              var that = this;
              var td;
              var tr;
              this.$("td").click(function () {
                td = this;
              });
              this.$("tr").click(function () {
                tr = this;
              });
            },
          });
        } else {
          var dt = $("#data-file-doc-lapangan").DataTable();
          dt.clear().draw();
        }
      },
    });
  } else if (mode == "update") {
    let stat = $("#status_" + type + "_" + id).val();
    let keterangan = $("#keterangan_" + type + "_" + id).val();

    $.ajax({
      type: "post",
      dataType: "json",
      url: "updatestatus",
      data: {
        table: "param_file",
        id: id,
        type: type,
        stat: stat,
        keterangan: keterangan,
      },
      success: function (result) {
        let data = result.data;
        location.reload();
      },
    });
  } else if (mode == "delete") {
    bootbox.confirm({
      message: "Anda Yakin <b>Hapus</b> data ini?",
      buttons: {
        confirm: {
          label: '<i class="bx bx-check"></i> Ya',
          className: "btn-success btn-xs",
        },
        cancel: {
          label: '<i class="bx bx-x"></i> Tidak',
          className: "btn-danger btn-xs",
        },
      },
      callback: function (result) {
        if (result) {
          $.ajax({
            type: "post",
            dataType: "json",
            url: "deletedata",
            data: {
              param: param,
              id: id,
              type: type,
            },
            success: function (result) {
              location.reload();
            },
          });
        }
      },
    });
  }
}

function uploadlapangan(formData) {
  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "uploadfilelapangan",
    data: formData,
    success: function (result) {
      location.reload();
      actionlapangan("view", $("#ini-ID-lapangan").val(), 1);
    },
  });
}

function hapusfile() {
  alert();
}

function reupload(type, id_parent) {
  
  var dialog = bootbox.dialog({
    message:
      '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false,
  });

  var formData = new FormData();
  formData.append("param", "data_file");
  formData.append("type", "1");
  formData.append("id_parent", (id_parent ? id_parent : $("#idpermohonan").val()));

  if (type == "izin-lingkungan") {
    formData.append(
      "file[doc_izin_lingkungan]",
      $("#doc_izin_lingkungan_reupload")[0].files[0]
    );
  } else if (type == "nib") {
    formData.append("file[doc_nib]", $("#doc_nib_reupload")[0].files[0]);
  } else if (type == "permohonan") {
    formData.append(
      "file[doc_permohonan]", window.filepermohonan
    );
  } else if (type == "penapisan-mandiri") {
    formData.append(
      "file[doc_penapisan_mandiri]",
      $("#doc_penapisan_mandiri_reupload")[0].files[0]
    );
  }

  
  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "reuploadfile",
    data: formData,
    success: function (result) {
      
      Swal.fire({
        type: "success",
        title: "Berhasil Upload File !",
        showConfirmButton: true,
        // showCancelButton: true,
        confirmButtonText: `Ok`,
      }).then((result) => {
        $(document).ready(function () {
          dialog.modal("hide");
          if(id_parent){
            loadpermohonan("1");
          }else{
            location.reload();
          }
        });
      });
    },
  });
}

function okdong(id, ok, idper) {
  var formData = new FormData();
  formData.append("param", "data_file");
  formData.append("id", id);
  formData.append("ok", ok);
  formData.append("idper", idper);

  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "okdong",
    data: formData,
    success: function (result) {
      Swal.fire({
        type: "success",
        title: "Berhasil Verifikasi File !",
        showConfirmButton: true,
        // showCancelButton: true,
        confirmButtonText: `Ok`,
      }).then((result) => {
        $(document).ready(function () {
          location.reload();
        });
      });
    },
  });
}

function inidelete(param, id, type, by, date) {
  bootbox.confirm({
    message: "Anda Yakin <b>Hapus</b> data ini?",
    buttons: {
      confirm: {
        label: '<i class="bx bx-check"></i> Ya',
        className: "btn-success btn-xs",
      },
      cancel: {
        label: '<i class="bx bx-x"></i> Tidak',
        className: "btn-danger btn-xs",
      },
    },
    callback: function (result) {
      if (result) {
        $.ajax({
          type: "post",
          dataType: "json",
          url: "deletedatapermohonan",
          data: {
            param: param,
            id: id,
            type: type,
            createby: by,
            createdate: date,
          },
          success: function (result) {
            location.reload();
          },
        });
      }
    },
  });
}

function checklog(id) {
  var ada = [];
  $.ajax({
    type: "post",
    dataType: "json",
    url: "checklog",
    data: {
      id: id,
    },
    success: function (result) {
      if (result.code != "0") {
        for (let index = 0; index < result.data.length; index++) {
          const element = result.data[index];
          ada.push(element);
        }
      }
    },
  });

  return ada;
}

function popupvalidasi(id, type, param, kategori) {
  $("#idv2").val(id);
  $("#modal_validasi").modal("show");
  $("#kategori").val(kategori ? kategori : 0);
  $("#jenis").val(param ? param : 0);
  if (!param) {
    $("#kategori").attr("disabled", false);
    $("#jenis").attr("disabled", false);
    $("#simpanaja").show();
  } else {
    $("#kategori").attr("disabled", true);
    $("#jenis").attr("disabled", true);
    $("#simpanaja").hide();
  }
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loadfilepermohonan",
    data: {
      id: id,
      type: type,
    },
    success: function (result) {
      var code = result.code;
      var data = result.data;
      var jenis = data.jenis;
      var isok = 0;
      var el = "";
      for (const key in data) {
        var id = data[key]["id"];
        var path = data[key]["path"];
        var filename = data[key]["filename"];
        var jenis = data[key]["jenis"];
        var ok = data[key]["ok"];
        var idper = data[key]["id_parent"];
        var checked = ok == 1 ? "checked" : "";
        var classe = !ok
          ? 'class="text-info"'
          : ok == 1
          ? 'class="text-success"'
          : 'class="text-danger"';
        isok += ok == 1 ? 1 : 0;
        // el += `<div class="checkbox">
        //         <label>
        //           <input name="form-field-checkbox" type="checkbox" class="ace" onclick="okdong(${id}, ${!ok ? 1 : ok==1? 2: 1})" ${checked}>
        //           <span class="lbl"> <a ${classe} target="_blank" type="button" href="public/${path+'/'+filename}"> <i class="ace-icon fa fa-file"></i> ${data[key]['jenis']} </a> </span>
        //         </label>
        //       </div>`

        el += `<div class="row" style="padding: 1px 0;">`;
        if (ok == 2) {
          el += `<div class="col-sm-2">
                  <div class="btn-group">
                    <a type="button" class="btn btn-white btn-sm btn-success waves-effect waves-light" onclick="okdong(${id}, 1, ${idper})">
                      <i class="bx bx-check font-size-16"></i>
                    </a>`;
          el += `
                    <a type="button" class="btn btn-white btn-sm btn-default waves-effect waves-light" disabled>
                      <i class="bx bx-x font-size-16"></i>
                    </a>
                  </div>
                </div>`;
          classe = 'class="text-danger"';
        } else if (ok == 1) {
          el += `<div class="col-sm-2">
                  <div class="btn-group">
                    <a type="button" class="btn btn-white btn-sm btn-default waves-effect waves-light" disabled>
                      <i class="bx bx-check font-size-16"></i>
                    </a>`;
          el += `
                    <a type="button" class="btn btn-white btn-sm btn-danger waves-effect waves-light" onclick="okdong(${id}, 2, ${idper})">
                      <i class="bx bx-x font-size-16"></i>
                    </a>
                  </div>
                </div>`;
        } else {
          el += `<div class="col-sm-2">
                  <div class="btn-group">
                    <a type="button" class="btn btn-white btn-sm btn-success waves-effect waves-light" onclick="okdong(${id}, 1, ${idper})">
                      <i class="bx bx-check font-size-16"></i>
                    </a>
                    <a type="button" class="btn btn-white btn-sm btn-danger waves-effect waves-light" onclick="okdong(${id}, 2, ${idper})">
                      <i class="bx bx-x font-size-16"></i>
                    </a>
                  </div>
                </div>`;
        }
        el += `<div class="col-sm-10" style="padding: 5px 0 0 10px;">
                <span class="lbl"> <a ${classe} target="_blank" type="button" href="public/${
          path + "/" + filename
        }"> <i class="bx bx-file"></i> ${
          data[key]["jenis"]
        } </a></span></div></div>`;
      }
      if (isok == 0) {
        $("#kategori").hide();
        $("#jenis").hide();
        $("#simpanaja").hide();
      }else if(jenis != "doc_permohonan"){
        $("#kategori").hide();
        $("#jenis").hide();
        $("#simpanaja").hide();
      }else{
        $("#kategori").show();
        $("#jenis").show();
        $("#simpanaja").show();
      }

      $("#file-unggahan").html(el);
    },
  });
}

function validasiV2(id, param) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "updatepermohonanparam",
    data: {
      id: $("#idv2").val(),
      kategori: $("#kategori").val(),
      param: $("#jenis").val(),
      ver: 2,
    },
    success: function (result) {
      location.reload();
    },
  });
}

function filepermohonan(isthis) {
    window.filepermohonan = isthis.files[0]
}

function editpermohonan(id) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loaddetailpermohonan",
    data: {
      param: id,
      type: 1,
      edit: 'true'
    },
    success: function (result) {
      var data = result.data;

      $("#ideditpermohonan").val(data.id);
      $("#input_6").val(data.p6).prop("disabled", true);
      $("#input_7").val(data.p7).prop("disabled", true);
      $("#input_8").val(data.p8).prop("disabled", true);
      $("#kota_kabupaten").val(data.regency_name).prop("disabled", true);
      $("#select_kecamatan").val(data.district_id).trigger('change').prop("disabled", true);
      // $("#select_kelurahan").val().trigger('change');
      $("#select_kelurahan").val(data.village_id).trigger('change').prop("disabled", true);
      $("#select_kategori").val(data.kategori).trigger('change').prop("disabled", true);
      $("#select_jenis").val(data.param).trigger('change').prop("disabled", true);
      $("#form-upload-permohonan").hide();
      $("#mohon_save").prop('disabled', false);
      // $("#modal_program").modal("show");
      $("#permohonan-teknis-page").hide();
      $("#permohonan-teknis-admin").hide();
      $("#form-detail").show();
    },
  });
}

function detailpermohonan(id) {
  $.ajax({
    type : "post",
    dataType : "json",
    url : "loaddetailpermohonan",
    data : {
      param : id,
      type : 1,
      edit : 'true'
    },
    success: function (result) {
      var data = result.data[0];
      $("#ideditpermohonan").val(data.id);
      $("#input_6").val(data.p6).prop("disabled", true);
      $("#input_7").val(data.p7).prop("disabled", true);
      $("#input_8").val(data.p8).prop("disabled", true);
      $("#kota_kabupaten").val(data.regency_name).prop("disabled", true);
      $("#select_kecamatan").val(data.district_id).trigger('change').prop("disabled", true);
      // $("#select_kelurahan").val().trigger('change');
      $("#select_kelurahan").val(data.village_id).trigger('change').prop("disabled", true);
      $("#select_kategori").val(data.kategori).trigger('change').prop("disabled", true);
      $("#select_jenis").val(data.param).trigger('change').prop("disabled", true);
      $("#form-upload-permohonan").hide();
      $("#mohon_save").prop('disabled', true);
      // $("#modal_program").modal("show");
      $("#permohonan-teknis-page").hide();
      $("#permohonan-teknis-admin").hide();
      $("#card-page-teknis").hide();
      $("#div_kategori").show();
      $("#kategori_slo").hide();
      $("#form-detail").show();
      if(data.status == 0){
        $("#id_edit_btn").show();
      }else if(data.status == 2){
        $("#alert-expired").show();
        $("#id_edit_btn").hide();
      }else{
        $("#id_edit_btn").hide();
      }
      var harap = [];
      for (var f in data['file'] ) {

        var jenisnya = data.file[f]['jenis'];
        var oknya = data.file[f]['ok'];
        $('#nama-file-permohonan').html(data.file[f]['filename']);
        $('#nama-file-permohonan').attr('onclick', "downloadatuh('"+'public/'+data.file[f]['path']+'/'+data.file[f]['filename']+"')");
        $('#hapus-permohonan').attr('onclick', "actionfile('delete','"+data.file[f]['id']+"','"+data.type+"','"+data.file[f]['path']+'/'+data.file[f]['filename']+"')");

        $('#view-file-permohonan').css('display', 'block');
        $('#form-permohonan-reupload').css('display', 'none');

        if(oknya == 1){
          $('#hapus-permohonan').css('display', 'none');
        }else{
          $('#hapus-permohonan').show();
          if(oknya == 2){
            var ell = ` <li>
                          <i class="">File Permohonan</i>
                        </li>`
            $('#harus-upload').append(ell);
            harap.push('permohonan');
          }
        }
      }
    }
  });
}