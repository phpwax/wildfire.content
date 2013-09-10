<?
class WildfireUrlMap extends WaxModel{
  public $identifier = "origin_url";

  public function setup(){
    $this->define("title", "CharField", array('scaffold'=>true,'group'=>'content','primary_group'=>1));
    $this->define("content", "CharField", array('editable'=>false));

    $this->define("origin_url", "CharField",array('scaffold'=>true,'group'=>'content','primary_group'=>1));
    //optional end points
    $this->define("destination_url", "CharField",array('scaffold'=>true,'group'=>'content','primary_group'=>1));
    $this->define("hash", "CharField",array('editable'=>false,'scaffold'=>true));
    $this->define("track_url", "IntegerField", array('editable'=>false,'group'=>'content','primary_group'=>1));
    //or pick the model & id
    $this->define("destination_model", "CharField", array('editable'=>false));
    $this->define("destination_id", "CharField", array('editable'=>false));
    //for multilingual sites
    foreach(CMSApplication::$languages as $i=>$l) $langs[$i] = $l['name'];
    $default = array_shift(array_keys(CMSApplication::$languages));
    $this->define("language", "IntegerField", array('export'=>true, 'widget'=>"SelectInput", 'choices'=>$langs, 'default'=>$default, 'group'=>'extras', 'editable'=>true, 'scaffold'=> (count(CMSApplication::$languages)>1)?true:false, 'info_preview'=>1));
    //allo for custom header status codes
    $this->define("header_status", "IntegerField", array('default'=>302, 'maxlength'=>5, 'widget'=>'SelectInput', 'choices'=>array('302'=>'Temp', '301'=>'Perm')));
    $this->define("utm_campaign", "CharField",array('group'=>'content','primary_group'=>1));
    $this->define("utm_medium", "CharField",array('group'=>'content','primary_group'=>1));

    //start / end dates /status - these are copied over from destination model
    $this->define("status", "IntegerField", array("maxlength"=>3, 'widget'=>"SelectInput", 'choices'=>array("Draft/Revision", "Live"), 'scaffold'=>true) );
    $this->define("date_start", "DateTimeField");
    $this->define("date_end", "DateTimeField");
    parent::setup();
  }

  public function before_save(){
    if(!$this->language) $this->language = 0;
  }

  public function scope_live(){
    return $this->filter("status", 1)->filter("TIMESTAMPDIFF(SECOND, `date_start`, NOW()) >= 0")->filter("(`date_end` <= `date_start` OR (`date_end` >= `date_start` AND `date_end` >= NOW()) )")->order("destination_url DESC, id ASC");
  }
  public function scope_preview(){
    return $this->filter("status", 0);
  }

  public function map_to($permalink, $model, $id, $status, $lang=0){
    return $this->update_attributes(array('title'=>$model->title,
                                    'origin_url'=>$permalink,
                                    'destination_id'=>$id,
                                    'destination_model'=>get_class($model),
                                    'status'=>$status,
                                    'date_start'=>$model->date_start,
                                    'date_end'=>$model->date_end,
                                    'language'=>$lang
                                    ));

  }
}
?>