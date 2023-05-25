<?php namespace App\Models;

use CodeIgniter\Model;

class ProgramModel extends Model{
    protected $table = 'data_program';
    protected $primaryKey = 'id';
    protected $allowedFields = ['kode_program','nama_program','created_by','updated_by','create_date','update_date'];
    protected $createdField  = 'create_date';
    protected $updatedField  = 'update_date';

    public function getProgram($role=null)
    {
          if($role == '30'){ //ppk
            $builder = $this->db->table('data_program');
            $query   = $builder->get();
            return  $query->getResult();
          }
          
          $builder = $this->db->table('data_program');
          $query   = $builder->get();
          return  $query->getResult();
    }

    public function getpermohonan($id = null, $role = null, $userid = null, $type = null)
    { 

          if($role == '0'){ 
            $builder = $this->db->table('data_permohonan');
            $query   = $builder->getWhere(['created_by' => $userid, 'type' => $type, 'id_perusahaan' => $id]);
            // echo $this->db->getLastQuery();die;

            return  $query->getResult();
          } 
          $builder = $this->db->table('data_permohonan');
          $query   = $builder->getWhere(['id_perusahaan' => $id, 'type' => $type]);
          return  $query->getResult();
    }
    
    public function getperusahaan($role=null, $userid=null)
    { 
      if($role == '0'){ 
            $builder = $this->db->table('data_perusahaan');
            $query = $builder->getwhere(['created_by' => $userid]);
            return  $query->getResult();
      }

      $builder = $this->db->table('data_perusahaan');
      $query = $builder->get();
//      echo $this->db->getLastQuery();die;
      return  $query->getResult();
    }

    public function countpermohonan($role=null,$userid=null,$type=null)
    { 

          if($role == '0'){ 
            $builder = $this->db->table('data_permohonan');
            $query   = $builder->getWhere(['created_by' => $userid, 'type' => $type]);
            return  $query->getResult();
          }

          $builder = $this->db->table('data_permohonan');
          $query   = $builder->getWhere(['status' => null, 'kategori' => null, 'param' => null]);
          return  $query->getResult();
      }
      
      public function saveParamComp($table = null, $data = null)
      {
            return $this->db->table($table)->insert($data);
      }
      
      public function saveParam($table = null, $data = null)
      {
            // echo $this->db->getLastQuery();die;
        return  $this->db->table($table)->insert($data);
      }

      public function getdatawilayah($id = null, $jenis = null)
      {
            if ($jenis == 'kecamatan') {
                  $sql = "SELECT kemendagri_kecamatan_nama, kemendagri_kecamatan_kode FROM 
                  dlh_kab.data_wilayah WHERE kemendagri_kota_kode  = $id AND 
                  kemendagri_kecamatan_kode IN (
                        SELECT kemendagri_kecamatan_kode FROM dlh_kab.data_wilayah 
                        GROUP BY kemendagri_kecamatan_kode HAVING COUNT(*) > 1
                  ) GROUP BY kemendagri_kecamatan_kode";
                  $result = $this->db->query($sql);
                  $row = $result->getResult();
                  return $row;
            } else if($jenis == 'kelurahan') {
                  $builder = $this->db->table('data_wilayah');
                  $query   = $builder->getWhere(['kemendagri_kecamatan_kode' => $id]);
                  return  $query->getResult();
            }else{
                  $builder = $this->db->table('data_wilayah');
                  $query   = $builder->getWhere(['kemendagri_kelurahan_kode' => $id]);
                  return  $query->getResult();
            }
      }
}