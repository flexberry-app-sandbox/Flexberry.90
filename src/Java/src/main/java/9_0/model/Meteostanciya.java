package 9_0.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 9_0.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Метеостанция
 */
@Entity(name = "IIS9_0Метеостанция")
@Table(schema = "public", name = "Метеостанция")
public class Meteostanciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Долгота")
    private Double долгота;

    @Column(name = "Название")
    private String название;

    @Column(name = "IDИдентификатор")
    private Integer idидентификатор;

    @Column(name = "Широта")
    private Double широта;

    @Column(name = "Местоположение")
    private String местоположение;

    @Column(name = "ТекущаяТемп")
    private Double текущаятемп;

    @Column(name = "ГородID")
    private Integer городid;

    @Column(name = "Влажность")
    private Double влажность;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "Empty", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private Gorod empty;


    public Meteostanciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getДолгота() {
      return долгота;
    }

    public void setДолгота(Double долгота) {
      this.долгота = долгота;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public Integer getIDИдентификатор() {
      return idидентификатор;
    }

    public void setIDИдентификатор(Integer idидентификатор) {
      this.idидентификатор = idидентификатор;
    }

    public Double getШирота() {
      return широта;
    }

    public void setШирота(Double широта) {
      this.широта = широта;
    }

    public String getМестоположение() {
      return местоположение;
    }

    public void setМестоположение(String местоположение) {
      this.местоположение = местоположение;
    }

    public Double getТекущаяТемп() {
      return текущаятемп;
    }

    public void setТекущаяТемп(Double текущаятемп) {
      this.текущаятемп = текущаятемп;
    }

    public Integer getГородID() {
      return городid;
    }

    public void setГородID(Integer городid) {
      this.городid = городid;
    }

    public Double getВлажность() {
      return влажность;
    }

    public void setВлажность(Double влажность) {
      this.влажность = влажность;
    }


}