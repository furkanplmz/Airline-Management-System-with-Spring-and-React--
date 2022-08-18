package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Flightss")
public class Flightss{
	@Id
	private String FlCode;
	
	@Column(name="flsource")
	private String FlSource;
	
	@Column(name="fldest")
	private String FlDest;
	
	@Column(name="fldate")
	private String FlDate;
	
	@Column(name="flseats")
	private int FlSeats;
	
	@Column(name="planename")
	private String PlaneName;
	
	public Flightss() {
		
	}
	
	
	public Flightss(String flSource, String flDest, String flDate, int flSeats, String planeName) {
		super();
		FlSource = flSource;
		FlDest = flDest;
		FlDate = flDate;
		FlSeats = flSeats;
		PlaneName = planeName;
	}
	public String getFlCode() {
		return FlCode;
	}
	public void setFlCode(String flCode) {
		FlCode = flCode;
	}
	public String getFlSource() {
		return FlSource;
	}
	public void setFlSource(String flSource) {
		FlSource = flSource;
	}
	public String getFlDest() {
		return FlDest;
	}
	public void setFlDest(String flDest) {
		FlDest = flDest;
	}
	public String getFlDate() {
		return FlDate;
	}
	public void setFlDate(String flDate) {
		FlDate = flDate;
	}
	public int getFlSeats() {
		return FlSeats;
	}
	public void setFlSeats(int flSeats) {
		FlSeats = flSeats;
	}
	public String getPlaneName() {
		return PlaneName;
	}
	public void setPlaneName(String planeName) {
		PlaneName = planeName;
	}
	
	
	
}