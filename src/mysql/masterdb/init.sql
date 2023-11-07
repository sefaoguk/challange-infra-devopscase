create user 'slave_user'@'%' identified by 'root';                      -- 'case' olan yere database master pass yazilir.
grant replication slave on *.* to 'slave_user'@'%' with grant option;
flush privileges;
