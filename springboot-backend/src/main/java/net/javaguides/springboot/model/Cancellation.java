package net.javaguides.springboot.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="CancelTbl")
public class Cancellation{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long CancId;
	
	@Column(name="tickid")
	private int TickId;
	
	@Column(name="flcode")
	private String FlCode;
	
	@Column(name="cancdate")
	private String CancDate;
	
	public Cancellation() {
		
	}
	
	
	
	public Cancellation(int tickId, String flCode, String cancDate) {
		super();
		TickId = tickId;
		FlCode = flCode;
		CancDate = cancDate;
	}



	public long getCancId() {
		return CancId;
	}

	public void setCancId(long cancId) {
		CancId = cancId;
	}

	public int getTickId() {
		return TickId;
	}

	public void setTickId(int tickId) {
		TickId = tickId;
	}

	public String getFlCode() {
		return FlCode;
	}

	public void setFlCode(String flCode) {
		FlCode = flCode;
	}

	public String getCancDate() {
		return CancDate;
	}

	public void setCancDate(String cancDate) {
		CancDate = cancDate;
	}
	
	
	
}
