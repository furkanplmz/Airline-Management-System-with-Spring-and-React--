package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tickettbll")
public class Ticket {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long TicketId;
	@Column(name="PName")
	private String PName;
	
	@Column(name="FlCode")
	private String FlCode;
	
	@Column(name="PGen")
	private String PGen;
	
	@Column(name="PPass")
	private String PPass;
	
	@Column(name="Amount")
	private int Amount;
	
	@Column(name="Nationality")
	private String Nationality;
	
	@Column(name="PLastName")
	private String PLastName;
	
	public Ticket() {
		
	}
	
	

	public Ticket(String pName, String flCode, String pGen, String pPass, int amount, String nationality,
			String pLastName) {
		super();
		PName = pName;
		FlCode = flCode;
		PGen = pGen;
		PPass = pPass;
		Amount = amount;
		Nationality = nationality;
		PLastName = pLastName;
	}



	public long getTicketId() {
		return TicketId;
	}

	public void setTicketId(long ticketId) {
		TicketId = ticketId;
	}

	public String getPName() {
		return PName;
	}

	public void setPName(String pName) {
		PName = pName;
	}

	public String getFlCode() {
		return FlCode;
	}

	public void setFlCode(String flCode) {
		FlCode = flCode;
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

	public int getAmount() {
		return Amount;
	}

	public void setAmount(int amount) {
		Amount = amount;
	}

	public String getNationality() {
		return Nationality;
	}

	public void setNationality(String nationality) {
		Nationality = nationality;
	}

	public String getPLastName() {
		return PLastName;
	}

	public void setPLastName(String pLastName) {
		PLastName = pLastName;
	}
	
}
