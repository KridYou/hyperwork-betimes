SELECT 
    t.title_name_th,
    u.first_name,
    u.last_name,
    u.age,
    u.email,
    u.username,
    p.Programming_name_en
FROM 
    tb_user u
JOIN 
    tb_title t ON u.titleid = t.titleid
JOIN 
    tb_programming_language p ON u.proramming = p.programmingid;
