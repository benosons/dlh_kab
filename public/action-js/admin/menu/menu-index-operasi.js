"use strict";
console.log("You are running jQuery version: " + $.fn.jquery);
$(document).ready(function () {
  $("#data_permohonan_btn").click(function(){
    $("#profile-perusahaan-page").hide();
    $("#permohonan-slo-page").show();
    $("#data_perusahaan_btn").removeClass("active");
    $("#data_permohonan_btn").addClass("nav-link active");
  }); 
  $("#data_perusahaan_btn").click(function(){
    $("#profile-perusahaan-page").show();
    $("#permohonan-slo-page").hide();
    $("#data_permohonan_btn").removeClass("active");
    $("#data_perusahaan_btn").addClass("nav-link active");
  });

  $("#back-all-permohonan").click(function(){
    $("#permohonan-all").show();
    $("#detail").hide();
  });

  window.stt = [];
  $("#nav-menu li").removeClass();
  // $('#nav-menu li#menu-data').addClass('open');
  $("#nav-menu li#menu-operasi").addClass("active");
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
        $("#submit_doc").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      if ($("#jenis_doc").val() != 0) {
        $("#submit_doc").prop("disabled", false);
      } else {
        $("#submit_doc").prop("disabled", true);
      }
    });

  $("#jenis_doc").on("change", function () {
    if ($('[name="id-input-file-3"]').val() == "" && $(this).val() == 0) {
      $("#submit_doc").prop("disabled", true);
    } else if ($('[name="id-input-file-3"]').val() == "" && $(this).val()) {
      $("#submit_doc").prop("disabled", true);
    } else if ($('[name="id-input-file-3"]').val() && $(this).val() == 0) {
      $("#submit_doc").prop("disabled", true);
    } else {
      $("#submit_doc").prop("disabled", false);
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
        $("#submit_doc_lapangan").prop("disabled", true);
        return true;
      },
    })
    .on("change", function () {
      $("#submit_doc_lapangan").prop("disabled", false);
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

  $("#all-permohonan").DataTable();
  $("#data-file-doc").DataTable();
  $("#data-file-doc-lapangan").DataTable();

  loadpermohonan("2");

  $("#mohon_save").on("click", function () {
    bootbox.confirm({
      message: "Apakah data yg anda masukan sudah <b>sesuai</b> ?",
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
          var formData = new FormData();
          if($('#ideditpermohonan').val()){
            formData.append("id_permohonan", $('#ideditpermohonan').val());
          }
          formData.append("param", "data_permohonan");
          formData.append("type", "2");
          formData.append("id_perusahaan", $('#idpermohonan').val());
          let berapa = [];
          for (let index = 1; index <= 9; index++) {
            if ($("#input_" + index).val()) {
              formData.append("input_" + index, $("#input_" + index).val());
              $("#input_" + index)
                .parent()
                .parent()
                .removeClass("has-error");
              berapa.push(index);
            } else {
              $("#input_" + index)
                .parent()
                .parent()
                .addClass("has-error");
            }
          }

          formData.append(
            "file[doc_permohonan]",
            $("#doc_permohonan")[0].files[0]
          );
          // formData.append("file[doc_izin_lingkungan]", $('#doc_izin_lingkungan').files);
          // formData.append("file[doc_nib]", $('#doc_nib').files);

          if (berapa.length == 3) {
            save(formData);
          }
        }
      },
    });
  });

  $("#submit_doc").on("click", function () {
    var formData = new FormData();
    formData.append('id', $('#ini-ID').val());
    formData.append('param', 'param_file');
    formData.append('type', '2');

    switch ($('#jenis_doc').val()) {
      case 'doc_permohonan_slo':
        formData.append("file[doc_permohonan_slo]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_izin_usaha':
        formData.append("file[doc_izin_usaha]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_persetujauan_lingkungan':
        formData.append("file[doc_persetujauan_lingkungan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_persetujuan_teknis':
        formData.append("file[doc_persetujuan_teknis]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_hasil_pemantauan':
        formData.append("file[doc_hasil_pemantauan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_kontrol_jaminan':
        formData.append("file[doc_kontrol_jaminan]", $('#doc_')[0].files[0]);
        
          break;
      case 'doc_sertifikat_registrasi':
        formData.append("file[doc_sertifikat_registrasi]", $('#doc_')[0].files[0]);
        
          break;
    }


    upload(formData);
  });

  $("#submit_doc_lapangan").on("click", function () {
    var formData = new FormData();
    formData.append("id", $("#ini-ID-lapangan").val());
    formData.append("param", "param_file_lapangan");
    formData.append("type", "2");
    formData.append("file[doc_izin_usaha]", $("#doc_lapangan").files);
    formData.append("keterangan", $("#keterangan_lapangan").val());

    uploadlapangan(formData);
  });

  $("#cekunggahan").on("click", function () {
    $(".remove").click();
    $("#jenis_doc").val("");
    $("#jenis_doc").trigger("chosen:updated");

    action("view", $("#idpermohonan").val(), $("#initype").val());
  });

  $("#editdataini").on("click", function () {
    $('#modal_edit_perusahaan').modal('show');
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
          $('#modal_edit_perusahaan').modal('show');

          $("#ideditperusahaan").val(data["id"]);
          $("#edit_1").val(data["nama_usaha"]).prop("disabled", false);
          $("#edit_2").val(data["bidang_usaha"]).prop("disabled", false);
          $("#edit_3").val(data["nib"]).prop("disabled", false);
          $("#edit_4").val(data["penanggung_jawab"]).prop("disabled", false);
          $("#edit_5").val(data["jabatan"]).prop("disabled", false);
          $("#edit_9").val(data["no_kbli"]).prop("disabled", false);
        }
      }
    });
  }

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

  $("#deletedataini").on("click", function () {
    action(
      "delete",
      $("#idpermohonan").val(),
      $("#initype").val(),
      "",
      "data_permohonan"
    );
  });

  $("#verlapanganini").on("click", function () {
    actionlapangan("view", $("#idpermohonan").val(), $("#initype").val());
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
          $("#mohon_save").prop("disabled", true);
        }
      } else {
        $("#mohon_save").prop("disabled", true);
      }
    }else{
      $("#mohon_save").prop("disabled", false);
    }
  });

  $("#kategori").on("change", function () {
    if (this.value > 0) {
      $("#simpanaja").attr("disabled", false);
    } else {
      $("#simpanaja").attr("disabled", true);
    }
  });

  $("#initambah").on("click", function () {
    $('#modal_program').modal({backdrop: 'static', keyboard: false})
    $('#modal_program').modal('show')
    for (let index = 6; index <= 8; index++){
      $(`#input_${index}`).val('')
    }
    $('#ideditpermohonan').val('')
    $('#doc_permohonan').val('')
    $('#form-upload-permohonan').show()
    $("#mohon_save").prop('disabled', true);
  });
});

function loadpermohonan(param) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loadpermohonan",
    data: {
      param: param,
      type: 2
    },
    success: function (result) {
      let code = result.code;
      if (code != "0") {
        if ($("#isRole").val() == 0) {
          let data = result.data;

          $("#idpermohonan").val(data.id);
          $("#initype").val(data.type);
          $("#initambah").show();
          if(typeof data.permohonan != 'undefined'){
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
                { mDataProp: "id", width: "10%" },
                { mDataProp: "p6" },
                { mDataProp: "p7" },
                { mDataProp: "p8" },
                { mDataProp: "id" },
                { mDataProp: "id" },
              ],
              order: [[0, "ASC"]],
              fixedColumns: true,
              aoColumnDefs: [
                { width: 50, targets: 0 },
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
                                  <button class="btn btn-danger btn-sm btn-round" id="hapus-permohonan" type="button" onclick="actionfile('delete', '${idfile_permohonan}', '${type_permohonan}', '${path_file}/${namafile_permohonan}')"><i class="bx bx-trash"></i></button>
                                </grp>
                              `
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

                      if (row.param) {
                        if (oks == 1) {
                          el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                                  <i class="bx bx-file font-size-16"></i>
                                </button>`;
                        }
                      }
                      el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="editpermohonan(${row.id}, '${row.p6}', '${row.p7}', '${row.p8}')">
                              <i class="bx bx-edit font-size-16"></i>
                            </button>`;
                      if (row.status == 1) {
                        el +=
                          `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                      } else {
                        el +=
                          `<button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>`;
                      }
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
          }

          let optd = "";
          $("#iskat").val(data.kategori);
          $("#isType").val(data.type);
          $("#dokumen-unggahan").html(
            data.kategori == "1"
              ? "PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN DAN/ATAU PEMANFAATAN AIR LIMBAH"
              : "PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN EMISI"
          );
          switch (data.kategori) {
            case "1": //limbah
              optd = `<option value="">Pilih Dokumen</option>
                            <option value="doc_permohonan_slo"> Surat Permohonan SLO </option>
                            <option value="doc_izin_usaha"> Perizinan Berusaha </option>
                            <option value="doc_persetujauan_lingkungan"> Persetujuan Lingkungan / Izin Lingkungan </option>
                            <option value="doc_persetujuan_teknis"> Persetujuan Teknis Air Limbah </option>
                            <option value="doc_hasil_pemantauan"> Hasil Pemantauan Air Limbah yang diuji oleh Laboratorium yang mendapat registrasi dari menteri </option>
                            <option value="doc_kontrol_jaminan"> Dokumen Kontrol Jaminan / Jaminan Kualitas (quality assurance / quality control) mengenai tata cara uji air limbah </option>
                            <option value="doc_sertifikat_registrasi"> Sertifikasi Registrasi Laboratorium Lingkungan </option>`;
              break;
            case "2": //udara
              optd = `<option value=""> </option>
                            <option value="doc_permohonan_slo"> Surat Permohonan SLO </option>
                            <option value="doc_izin_usaha"> Perizinan Berusaha </option>
                            <option value="doc_persetujauan_lingkungan"> Persetujuan Lingkungan / Izin Lingkungan </option>
                            <option value="doc_persetujuan_teknis"> Persetujuan Teknis </option>
                            <option value="doc_hasil_pemantauan"> Hasil Pemantauan Emisi yang diuji oleh Laboratorium yang mendapat registrasi dari menteri </option>
                            <option value="doc_kontrol_jaminan"> Dokumen Kontrol Jaminan / Jaminan Kualitas (quality assurance / quality control) mengenai tata cara uji emisi </option>
                            <option value="doc_sertifikat_registrasi"> Sertifikat Registrasi Laboratorium Lingkungan </option>`;
              break;
          }

          $("#jenis_doc").html(optd);
          $("#jenis_doc").trigger("chosen:updated");

          $("#initype").val(2);
          $("#ini-form-add").hide();
          $("#ini-form-view").show();
          $("#file-nib-form").hide();
          $("#izin-lingkungan-form").hide();
          $("#penapisan-mandiri-form").hide();

          if (data.status == 1) {
            $("#verlapanganini").parent().parent().show();
            $("#surveykepuasan").parent().parent().show();
            $("#menu-puas").show();
            sessionStorage.setItem("survey", 1);
            $("#ini-verifikasi").hide();
          } else {
            $("#verlapanganini").parent().parent().hide();
            $("#surveykepuasan").parent().parent().hide();
            $("#menu-puas").hide();
            sessionStorage.setItem("survey", 0);
            $("#ini-verifikasi").show();
          }

          $("#cekunggahan").show();
          $("#deletedataini").show();
          for (let index = 1; index <= 9; index++) {
            $("#view_" + index).val(data["p" + index]);
            $("#view_" + index).prop("disabled", true);
          }

          $("#view_1").val(data["nama_usaha"]).prop("disabled", true);
          $("#view_2").val(data["bidang_usaha"]).prop("disabled", true);
          $("#view_3").val(data["nib"]).prop("disabled", true);
          $("#view_4").val(data["penanggung_jawab"]).prop("disabled", true);
          $("#view_5").val(data["jabatan"]).prop("disabled", true);
          $("#view_9").val(data["no_kbli"]).prop("disabled", true);

          var harap = [];
          for (var f in data["file"]) {
            var jenisnya = data.file[f]["jenis"];
            var oknya = data.file[f]["ok"];

            switch (jenisnya) {
              case "doc_permohonan":
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
                  $("#ini-verifikasi").hide();
                } else {
                  $("#cekunggahan").css("display", "none");
                  $("#hapus-permohonan").show();
                  $("#cekunggahan").hide();
                  if (oknya == 2) {
                    var ell = ` <li>
                                          <i class="">File Permohonan</i>
                                        </li>`;
                    $("#harus-upload").append(ell);
                    harap.push("permohonan");
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
                    harap.push("izin");
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
                    harap.push("nib");
                  }
                }
                break;

              default:
                break;
            }
          }

          if (harap.length == 0) {
            $("#harap").hide();
          }
        } else {
          let data = result.data;
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
                    var typeper = data.type;
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
                    var rows = row.permohonan;
                    if (rows.length) {
                        el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="detailper(${row.id})">
                                <i class="bx bx-show font-size-16"></i>
                              </button>`;
                    }
                    if (row.status == 1) {
                      el +=
                        `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                    } else {
                      el +=
                        `<button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>`;
                    }
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
        }
      } else {
        if ($("#isRole").val() == 0) {
          $("#initambah").show();
          $('#data_permohonan_btn').hide();
          $("#cekunggahan").css("display", "none");
          $("#cekunggahan").hide();
          $("#deletedataini").hide();
          $("#editdataini").hide();
        } else {
          var dt = $("#all-permohonan").DataTable();
          dt.clear().draw();
        }
      }
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
        var formData = new FormData();
        if($('#ideditpermohonan').val()){
          formData.append("id_permohonan", $('#ideditpermohonan').val());
        }
        formData.append("param", "data_permohonan");
        formData.append("type", "2");
        formData.append("id_perusahaan", $('#idpermohonan').val());
        let berapa = [];
        for (let index = 1; index <= 9; index++) {
          if ($("#input_" + index).val()) {
            formData.append("input_" + index, $("#input_" + index).val());
            $("#input_" + index)
              .parent()
              .parent()
              .removeClass("has-error");
            berapa.push(index);
          } else {
            $("#input_" + index)
              .parent()
              .parent()
              .addClass("has-error");
          }
        }
        
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
    },
  });
});

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
      // location.reload();
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
      type: 2
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
            { mDataProp: "id", width: "10%" },
            { mDataProp: "p6" },
            { mDataProp: "p7" },
            { mDataProp: "kategori" },
            { mDataProp: "param" },
            { mDataProp: "id" },
          ],
          order: [[0, "ASC"]],
          fixedColumns: true,
          aoColumnDefs: [
            { width: 50, targets: 0 },
            {
              render: function (data, type, row) {
                if (type == "display") {
                  if (!row.kategori) {
                    return "-";
                  }

                  let iskat = "";
                  let kategori = [
                    "",
                    "Air Limbah",
                    "Udara",
                  ];

                  return kategori[row.kategori];
                }
                return data;
              },
              aTargets: [3],
            },
            {
              render: function (data, type, row) {
                if (type == "display") {
                  if (!row.param) {
                    return "-";
                  }
                  let par = ["", "Kajian Teknis", "Standar Teknis"];
                  return par[row.param];
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

                  if (row.param) {
                      el += `<button type="button" class="btn btn-sm btn-primary waves-effect waves-light" onclick="action('view',${row.id},'${row.type}', '', '', '${row.param}',${row.kategori})">
                              <i class="bx bx-file font-size-16"></i>
                            </button>`;
                  }
                  el += `<button type="button" class="btn btn-sm btn-info waves-effect waves-light" onclick="popupvalidasi(${row.id}, '${row.type}', ${row.param}, ${row.kategori})">
                          <i class="bx bx-list-ul font-size-16"></i>
                        </button>`;
                  if (row.status == 1) {
                    el +=
                      `<button type="button" title="Verifikasi Lapangan" class="btn btn-sm btn-success waves-effect waves-light" onclick="actionlapangan('view','${row.id}','${row.type}')"><i class="bx bx-check-square font-size-16"></i></button>`;
                  } else {
                    el +=
                      `<button type="button" class="btn btn-sm btn-danger" onclick="action('delete','${row.id}','${row.type}','','data_permohonan')"><i class="bx bx-trash font-size-16"></i></button>`;
                  }
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

function uploadlapangan(formData) {
  $.ajax({
    type: "post",
    processData: false,
    contentType: false,
    url: "uploadfilelapangan",
    data: formData,
    success: function (result) {
      // location.reload()
      actionlapangan("view", $("#ini-ID-lapangan").val(), 2);
    },
  });
}

function action(mode, id, type, keterangan, param, kategori) {
  if (mode == "view") {
    $("#modal_file").modal("show");

    loadstatus(id, 2);
    $.ajax({
      type: "post",
      dataType: "json",
      url: "loadfile",
      data: {
        id: id,
        type: type,
      },
      success: function (result) {
        let data = result.data;
        let code = result.code;

        if ($("#role").val() == "10") {
          $("#dokumen-unggahan").html(
            keterangan == "1"
              ? "PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN DAN/ATAU PEMANFAATAN AIR LIMBAH"
              : "PERSYARATAN PERMOHONAN SURAT KELAYAKAN OPERASIONAL PEMBUANGAN EMISI"
          );

          // $('#dokumen-unggahan').html(`<i class="ace-icon fa fa-file green "></i>&nbsp;Dokumen Unggahan ${keterangan == 1? 'Air Limbah' : 'Udara'}`)

          if (result.data.length >= 6) {
            for (let i = 0; i < result.data.length; i++) {
              var element = result.data[i]["status"];
              if (element == "0") {
                window.stt.push(element);
              }
            }

            if (window.stt.length >= 6) {
              updatestatusmaster(id, 1);
            } else {
              updatestatusmaster(id, 0);
            }
          }
        } else {
        }

        $("#ini-ID").val(id);
        if (code != "0") {
          var dt = $("#data-file-doc").DataTable({
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
              { mDataProp: "id", width: "1%" },
              { mDataProp: "jenis" },
              { mDataProp: "filename" },
              { mDataProp: "status", width: "15%" },
              { mDataProp: "created_date" },
              { mDataProp: "updated_date" },
              { mDataProp: "keterangan" },
              { mDataProp: "id", width: "15%" },
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
                      ` value="1"> <i>Revisi</i> </option>
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
                aTargets: [6],
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
                  var el =
                    `<div class="btn-group">
                      <a class="btn btn-xs btn-warning" target="_blank" href="public/` +row.path +"/" +row.filename +`">
                        <i class="bx bxs-download font-size-16"></i>
                      </a>`;
                  if ($("#role").val() == 0) {
                    if (row.status == "1") {
                      el +=
                        `<button class="btn btn-xs btn-info" onclick="revisi('` +
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
                        row.kategori +
                        `')">
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
                    el +=
                      `<button class="btn btn-xs btn-success" onclick="action('update','` +
                      row.id +
                      `','` +
                      row.type +
                      `')">
                        <i class="bx bx-check-double"></i>
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
                                  el +=`
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
                                el += `</ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`
                  
                  //               el += `<div class="timeline-item clearfix">
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
                  //                 <i class="bx bx-history font-size-16"></i>
                  //                 ${
                  //                   row.history[index][
                  //                     "createdate"
                  //                   ]
                  //                 }
                  //               </div>
                  //             </div>
                  //           </div>
                  //         </div>`;
                  // }
                  // el += `</div>
                  //       </div>
                  //     </ul>
                  //   </div>`;

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
          var dt = $("#data-file-doc").DataTable();
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
        // action('view',$('#ini-ID').val(id),2)
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

function actionlapangan(mode, id, type, keterangan, param) {
  if (mode == "view") {
    $("#modal_file_lapangan").modal("show");
    $("#keterangan_lapangan").val("");
    $("#doc_lapangan").val("");
    $(".remove").trigger("click");
    loadstatus(id, 2);
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
                        row.kategori +
                        `')"><i class="ace-icon fa fa-edit bigger-120"></i></button></div>`;
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
                            <i class="bx bx-trash font-size-16"></i>
                          </button></div>`;
                    }
                  } else {
                    // el += `<button class="btn btn-xs btn-success" onclick="action('update','`+row.id+`','`+row.type+`')">
                    //           <i class="bx bx-check-square font-size-16"></i>
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
                            <i class="bx bx-trash font-size-16"></i>
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

function loadstatus(id, type, jenis) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "loadstatus",
    data: {
      id: id,
      type: type,
      jenis: jenis,
    },
    success: function (result) {
      let data = result.data;

      for (let i = 0; i < data.length; i++) {
        $('#jenis_doc option[value="' + data[i]["jenis"] + '"]').prop(
          "disabled",
          true
        );
        $("#jenis_doc").trigger("chosen:updated");
      }
    },
  });
}

function updatestatusmaster(id, stat) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "updatestatusmaster",
    data: {
      id: id,
      stat: stat,
    },
    success: function (result) {
      let data = result.data;
    },
  });
}

function revisi(id, type, jenis, path, kategori) {
  $("#edit_group").removeAttr("hidden");
  $("#jenis_edit").val(jenis);
  $("#id_edit").val(id);
  $("#path_edit").val(path);
  $("#type_edit").val(type);
  $("#kategori_edit").val(kategori);
}

$("#submit_edit").on("click", function () {
  var formData = new FormData();
  formData.append("id", $("#id_edit").val());
  formData.append("path", $("#path_edit").val());
  formData.append("type", $("#type_edit").val());
  formData.append("kategori", $("#kategori_edit").val());
  formData.append("file[]", $("#edit_file")[0].files[0]);
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
          url: "deletedataungahan",
          data: {
            param: "param_file",
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

function actionfilelapang(mode, id, type, path) {
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

function reupload(type, id_parent) {
  var dialog = bootbox.dialog({
    message:
      '<p class="text-center mb-0"><i class="fa fa-spin fa-spinner"></i> Mohon Tunggu ...</p>',
    closeButton: false,
  });

  var formData = new FormData();
  formData.append("param", "data_file");
  formData.append("type", "2");
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
            loadpermohonan("2");
          }else{
            location.reload();
          }
        });
      });
    },
  });
}

function okdong(id, ok) {
  var formData = new FormData();
  formData.append("param", "data_file");
  formData.append("id", id);
  formData.append("ok", ok);

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

function popupvalidasi(id, type, param, kategori) {
  $("#idv2").val(id);
  $("#modal_validasi").modal("show");
  $("#kategori").val(kategori ? kategori : 0);
  if (!kategori) {
    $("#kategori").attr("disabled", false);
    $("#simpanaja").show();
  } else {
    $("#kategori").attr("disabled", true);
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
      var isok = 0;
      var el = "";
      for (const key in data) {
        var id = data[key]["id"];
        var path = data[key]["path"];
        var filename = data[key]["filename"];
        var jenis = data[key]["jenis"];
        var ok = data[key]["ok"];
        var checked = ok == 1 ? "checked" : "";
        var classe = !ok
          ? 'class="text-info"'
          : ok == 1
          ? 'class="text-success"'
          : 'class="text-danger"';
        isok += ok == 1 ? 1 : 0;
        el += `<div class="row" style="padding: 1px 0;">`;
        if (ok == 2) {
          el += `<div class="col-sm-2">
                  <div class="btn-group">
                    <a type="button" class="btn btn-white btn-sm btn-success waves-effect waves-light" onclick="okdong(${id}, 1)"> 
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
                    <a type="button" class="btn btn-white btn-sm btn-danger waves-effect waves-light" onclick="okdong(${id}, 2)"> 
                      <i class="bx bx-x font-size-16"></i>
                    </a>
                  </div>
                </div>`;
        } else {
          el += `<div class="col-sm-2">
                  <div class="btn-group">
                      <a type="button" class="btn btn-white btn-sm btn-success waves-effect waves-light" onclick="okdong(${id}, 1)"> 
                        <i class="bx bx-check font-size-16"></i>
                      </a>
                      <a type="button" class="btn btn-white btn-sm btn-danger waves-effect waves-light" onclick="okdong(${id}, 2)"> 
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
        } </a> </span></div></div>`;
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

function filepermohonan(isthis) {
  window.filepermohonan = isthis.files[0]
}

function validasiV2(id, param) {
  $.ajax({
    type: "post",
    dataType: "json",
    url: "updatepermohonanparam",
    data: {
      id: $("#idv2").val(),
      kategori: $("#kategori").val(),
      param: null,
      ver: 2,
    },
    success: function (result) {
      location.reload();
    },
  });
}


function editpermohonan(id, alamat, notelp, email) {
  $("#ideditpermohonan").val(id);
  $("#input_6").val(alamat);
  $("#input_7").val(notelp);
  $("#input_8").val(email);
  $("#form-upload-permohonan").hide();
  $("#mohon_save").prop('disabled', false);
  $("#modal_program").modal("show");
}
