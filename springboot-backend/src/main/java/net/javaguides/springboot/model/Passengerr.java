package net.javaguides.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="passengertable")

public class Passengerr {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long PId;
	@Column(name="PName")
	private String PName;
	
	@Column(name="Last")
	private String Last;
	
	@Column(name="PNat")
	private String PNat;
	
	@Column(name="PGen")
	private String PGen;
	
	@Column(name="PPass")
	private String PPass;
	
	@Column(name="PAdd")
	private String PAdd;
	
	@Column(name="Pphone")
	private String Pphone;
	
	public Passengerr() {
		
	}
	
	public Passengerr(String pName,String last, String pNat, String pGen, String pPass, String pAdd,
			String pphone) {
		super();
		PName = pName;
		Last = last;
		PNat = pNat;
		PGen = pGen;
		PPass = pPass;
		PAdd = pAdd;
		Pphone = pphone;
	}
	public long getPId() {
		return PId;
	}
	public void setPId(long pId) {
		PId = pId;
	}
	public String getPName() {
		return PName;
	}
	public void setPName(String pName) {
		PName = pName;
	}
	public String getlast() {
		return Last;
	}
	public void setlast(String last) {
		Last = last;
	}
	
	public String getPNat() {
		return PNat;
	}
	public void setPNat(String pNat) {
		PNat = pNat;
	}
	public String getPGen() {
		return PGen;
	}
	public void setPGen(String pGen) {
		PGen = pGen;
	}
	public String getPPass() {
		return PPass;
	}
	public void setPPass(String pPass) {
		PPass = pPass;
	}
	public String getPAdd() {
		return PAdd;
	}
	public void setPAdd(String pAdd) {
		PAdd = pAdd;
	}
	public String getPphone() {
		return Pphone;
	}
	public void setPphone(String pphone) {
		Pphone = pphone;
	}
	
	

}
